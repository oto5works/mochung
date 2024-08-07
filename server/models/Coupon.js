const mongoose = require('mongoose')
const { Schema } = mongoose

const couponSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  code: String,
  used: Boolean,
  dateCreate: Date,
  dateUsed: Date,
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
})

couponSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Coupon', couponSchema)
