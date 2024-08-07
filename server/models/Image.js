const mongoose = require('mongoose')
const { Schema } = mongoose

const imageSchema = new Schema({
  filename: { type: String },
  url: { type: String },
}, 
{
  timestamps: true
})

imageSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Image', imageSchema)
