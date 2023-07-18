const mongoose = require('mongoose')
const { Schema } = mongoose

const postSchema = new Schema({
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      main: {
        title: String,
        url: String,
        main_type: String,
      },
      likes: [Schema.Types.ObjectId],
      createdate: Date,
      comments: [{
        writer: String,
        content: String,
        password: String,
      }],
})

postSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Post', postSchema)
