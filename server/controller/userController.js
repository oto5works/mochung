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
  
  exports.detail = async (req, res) => {
    console.log ('야레야레', req.params.id)
    const id = req.params.id
    const user = await User.findById(id).populate('archive', {
      formData: 1,
      dateCreate: 1,
      pay: 1,
      like: 1,
      surveys: 1,
      comments: 1,
    })
    console.log ('염병', user)

    res.status(200).json(user)
  }