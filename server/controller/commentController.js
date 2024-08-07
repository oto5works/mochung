/* commentController */
const Comment = require('../models/Comment');
const Post = require('../models/Post');

exports.create = async (req, res, next) => {
  try {
    const post_id = req.body.post_id;
    const writer = req.body.writer;
    const password = req.body.password;
    const content = req.body.content;

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
      password,
      content,
      dateCreate: Date.now(),
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
  console.log ('야레야레', req.params.id)
  const id = req.params.id
  const comment = await Post.findById(id).populate('comments', {
    post_id: 1,
    writer: 1,
    password: 1,
    content: 1,
    dateCreate: 1,
  })
  console.log ('염병', comment)

  res.status(200).json(comment)
}

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
