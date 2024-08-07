const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  password: { type: String },
  snsId : { type: String },
  nickname : { type: String },
  age : { type: String },
  gender : { type: String },
  email : { type: String, unique: true },
  mobile : { type: String, require: true },
  name : { type: String },
  birthday : { type: String },
  birthYear : { type: String },
  status : { type: String, require: true },
  provider : { type: String },
  access_token : { type: String },
  archive: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id

    delete returnedObject.password
    delete returnedObject._id
    delete returnedObject.__v
  }
})



//create new User document
userSchema.statics.create = function(email, password, name) {
  const user = new this({
      email,
      password,
      name,
  })

  //return the Promise
  return user.save()
}

//find one user by using username
userSchema.statics.findOneByEmail = function(snsId) {
  return this.findOne({
    snsId
  }).exec()
}

//vertify the password of the User document
userSchema.methods.verify = function(password) {
  return this.password === password
}


/* ******************************************************************
** 소셜 로그인 관련
* ******************************************************************/

//find one user by using username
userSchema.statics.findOneByEmailAndProvider = function(snsId, provider) {
  return this.findOne({ snsId, provider }).exec()
}

//create new User document
userSchema.statics.social_create = function(snsId, nickname, age, gender, email, mobile, name, birthday, birthYear, status, provider, access_token) {
  const user = new this({ snsId, nickname, age, gender, email, mobile, name, birthday, birthYear, status, provider, access_token })

  //return the Promise
  return user.save()
}

module.exports = mongoose.model('User', userSchema)