const User = require('../models/User')

exports.me = async (req, res) => {
    const id = req.decoded.userId
    const user = await User.findById(id).populate('posts', {
      mainData: 1,
      main: 1,
      wedding: 1,
      info: 1,

      likes: 1,
      comments: 1,
      createdate: 1
    })
    res.status(200).json(user)
  }
  
  