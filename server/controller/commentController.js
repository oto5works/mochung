/* commentController */
const Comment = require('../models/Comment');
const Post = require('../models/Post');

exports.create = async (req, res, next) => {
  console.log ('req.body.parent=', req.body.parent)
  try {
    const post_id = req.body.post_id;
    const isWriter = req.body.isWriter;
    const writer = req.body.writer;
    const password = req.body.password;
    const content = req.body.content;
    const parent = req.body.parent || null; // 대댓글의 부모 댓글 ID (없으면 null)

    // Get the client's real IP address from the x-forwarded-for header
    const user_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Find the post by post_id
    const post = await Post.findById(post_id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Create a new comment
    const newCommentInfo = {
      post_id,
      user_ip,
      writer,
      isWriter,
      password,
      content,
      dateCreate: Date.now(),
      parent // 부모 댓글 ID 추가
    };

    const newComment = new Comment(newCommentInfo);
    await newComment.save();

    // Update the 'comments' field in the post document with the new comment's id
    post.comments.push(newComment._id);
    await post.save();

    res.status(201).json(newComment);
  } catch (error) {
    console.error('Error:', error);
    next(error);
  }
};


exports.detail = async (req, res) => {
  try {
    console.log('야레야레', req.params.id);
    const id = req.params.id;

    // 포스트를 찾아서 댓글을 포함해 가져옴
    const post = await Post.findById(id).populate({
      path: 'comments',
      select: 'post_id writer isWriter password content dateCreate parent',
      populate: {
        path: 'parent', // 부모 댓글을 populate하여 대댓글 관계 가져오기
        select: 'writer content' // 필요한 필드만 선택
      }
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    console.log('염병', post);
    
    // 댓글과 대댓글을 트리 구조로 변환
    const commentsTree = buildCommentsTree(post.comments);

    res.status(200).json({ ...post._doc, comments: commentsTree });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 댓글을 트리 구조로 변환하는 함수
const buildCommentsTree = (comments) => {
  const map = {};
  const tree = [];

  // 모든 댓글을 map에 저장
  comments.forEach(comment => {
    map[comment._id.toString()] = { ...comment._doc, children: [] }; // children 필드 추가
  });

  // 모든 대댓글을 최상위 부모의 children에 추가
  comments.forEach(comment => {
    if (comment.parent) {
      let topLevelParent = comment;

      // 최상위 부모를 찾기 위해 반복
      while (topLevelParent.parent) {
        topLevelParent = map[topLevelParent.parent.id.toString()];
      }

      // 최상위 부모에 댓글 추가 (parent 정보는 유지)
      map[topLevelParent._id.toString()].children.push(map[comment._id.toString()]);
    } else {
      // 최상위 댓글인 경우
      tree.push(map[comment._id.toString()]);
    }
  });

  return tree;
};




exports.delete = async (req, res, next) => {
  try {
    const commentId = req.params.id;
    const providedPassword = req.body.password;

    const comment = await Comment.findById(commentId).populate('post_id'); // 'post_id'도 함께 가져오기

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    const verifiedPassword = comment.password;
    const masterPassword = comment.post_id.formData.guestData.comment.password;

    // 비밀번호 검증 추가
    if (![verifiedPassword, masterPassword].includes(providedPassword)) {
      return res.status(401).json({ message: '비밀번호가 틀렸습니다.' });
    }

    await comment.remove();

    // 관련 게시물의 댓글 목록에서 삭제된 댓글 제거
    comment.post_id.comments.pull(commentId);
    await comment.post_id.save();

    res.status(204).end();

  } catch (error) {
    console.error('Error:', error);
    next(error);
  }
};
