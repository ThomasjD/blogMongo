const moongoose = require('mongoose')

//structure for comments
let comment = mongoose.Schema({
  postid: String,
  commentbody: String
})

const comment = moongoose.model('Comment', comment)

module.exports = Comment
