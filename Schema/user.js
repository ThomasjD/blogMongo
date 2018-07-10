const moongoose = require('mongoose')

//structure for comments
let user = mongoose.Schema({
  name: String,
  username: String
})

//convert schema into a model
const User = moongoose.model('User', userSchema)

//make it available in Node application
module.exports = User
