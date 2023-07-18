const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: { type: String },
  name: String,
  nick: {
    type: String,
    require: true
},
snsId: {
  type: String,
  require: true
},
provider: {
  type: String,
  require: true
},
admin: {
  type: Boolean,
  default: false
},
access_token: {
  type: String,
  require: true
},
  description: String,
  img: String,
  posts: [{
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
userSchema.statics.findOneByEmail = function(email) {
  return this.findOne({
      email
  }).exec()
}

userSchema.methods.assignAdmin = function() {
  this.admin = true
  return this.save();
}

//vertify the password of the User document
userSchema.methods.verify = function(password) {
  return this.password === password
}


/* ******************************************************************
** 소셜 로그인 관련
* ******************************************************************/

//find one user by using username
userSchema.statics.findOneByEmailAndProvider = function(email, provider) {
  return this.findOne({
      email,
      provider
  }).exec()
}

//create new User document
userSchema.statics.social_create = function(email, password, name, nick, snsId, provider, access_token ) {
  const user = new this({
      email,
      password,
      name,
      nick,
      snsId,
      provider,
      access_token
  })

  //return the Promise
  return user.save()
}

module.exports = mongoose.model('User', userSchema)