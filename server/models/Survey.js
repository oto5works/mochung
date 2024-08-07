const mongoose = require('mongoose')
const { Schema } = mongoose

const surveySchema = new Schema({
  post_id: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  user_ip: String,
  host: String,
  attend: String,
  name: String,
  tell: String,
  pal: Array,
  fare: String,
  receive: String,
  postcode: String,
  address: String,
  detail: String,
  message: String,
  dateCreate: Date,
})

surveySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Survey', surveySchema)
