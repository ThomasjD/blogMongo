const moongoose = require('mongoose')

//structure for comments
let user = mongoose.Schema({
  username: String,
})

//convert schema into a model
const user = moongoose.model('User', user)

module.exports = User
