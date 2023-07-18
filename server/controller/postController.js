const Post = require('../models/Post')
const User = require('../models/User')
const Image = require('../models/Image')

exports.index = async (req, res, next) => {
    const posts = await Post.find({}).populate('user', {
        email: 1,
        name: 1,
        img: 1
      })
      res.status(200).json(posts)
};

exports.detail = (req, res, next) => {
    Post.findById(req.params.id,(err, post) => {
        if(err) {
            return next(err);
        }
     res.status(200).json(post);
    });
};

exports.create = async (req, res, next) => {
  try {
      const { 
        // user
        user_id,
        // mainData
        // main
        title, url, main_type,
      } = req.body


      // 그룹 설정
      const main = { title, url, main_type }
     
      const user = await User.findById(user_id)

      const newPostInfo = {
        main,
        createdate: Date.now(),
        user: user._id,
      }
      const newPost = new Post(newPostInfo)
      const savedPost = await newPost.save()
      const post = await Post.findById(savedPost._id)
      .populate('user', {
        email: 1,
        name: 1,
        img: 1
      })
      user.posts = user.posts.concat(savedPost._id)
      await user.save()
      res.status(201).json(post)
    } catch (error) {
      next(error)
    }
}

exports.edit = (req, res, next) => {
    Post.findById(req.params.id, (err, post) => {
        if(err) {
            return next(err);
        }
        res.status(200).json(post);
    });
};

exports.update = async (req, res) => {
    const id = req.params.id
    let newPostInfo
    newPostInfo = { ...req.body }
    try {
      const updatedPost = await Post.findByIdAndUpdate(id, newPostInfo, { new: true })
      res.status(200).json(updatedPost)
    } catch (error) {
      console.error(error)
    }
}

exports.delete = (req, res, next) => {
    Post.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            return next(err);
        }
        Post.find({}, (err, post) => {
            if(err) {
                return next(err);
            }
            res.status(200).json(post);
        });
    })
}

exports.urlDuplicate = async (req, res) => {
  const urlItem = req.body.params.data;

  try {
    // Search for any existing Post documents that have the same URL
    const existingPost = await Post.findOne({ 'main.url': urlItem });

    // If a matching Post document was found, return an error response
    if (existingPost) {
      return res.status(200).json('false');
    }

    // If no matching Post documents were found, send a success response
    return res.status(200).json('true');

  } catch (err) {
    // If an error occurred during the database query, send a generic error response
    console.error(err);
    return res.status(500).json({ error: '중복된 URL을 확인하는 동안 오류가 발생했습니다' });
  }
};


exports.commentAdd = async (req, res, next) => {
    const id = req.params.id
    const { content, writer, password } = req.body
    try {
      const post = await Post.findById(id)
    
      post.comments = post.comments.concat({ content, writer, password })
  
      const updatedPost = await post.save()
      res.status(200).json(updatedPost)
  
    } catch (error) {
      next(error)
    }
  }

exports.commentDelete = async (req, res, next) => {
    Post.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            return next(err);
        }
        post.comments.find({}, (err, posts) => {
            if(err) {
                return next(err);
            }
            res.status(200).json(posts);
        });
    })
  }