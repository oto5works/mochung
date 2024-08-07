const mongoose = require('mongoose')
const { Schema } = mongoose

const postSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  writer: String,
  formData: Object,
  dateCreate: Date,
  pay: Boolean,
  like: Number,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  surveys: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Survey'
    }
  ]
})

postSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Post', postSchema)
