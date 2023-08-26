const mongoose = require('mongoose')

mongoose.set('strictQuery',false)


const userSchema = new mongoose.Schema({
    user: String,
    username: String,
    passwordhash: String,
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog'
        }
    ]
  })

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v

    delete returnedObject.passwordhash
  }
})

module.exports = mongoose.model('user', userSchema)

