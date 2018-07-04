const mongoose = require('mongose')

//structure of document
let postSchema = moongoose.Schema({
  username: String,
  comments: Number,
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
