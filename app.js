const express = require ('express')
const mongoose = reuire('mongoose')
const Post = require('./schema/post')
const Comment = require('./schema/comment')
/*
user
  -name
  -bio
post
  -userid
  -title
comment
  -postid
  -commentbody


  ?how does comment find post, post ref to user
  ?does comment need to ref both post & user
  ?How to find user, by referencing the comments



*/

//if db doesnt exist, then its created
mongoose.connect('mongodb://localhost/blogthomas')


//get db connection object
const db = moongoose.connection

//creating a user object
let josh  = new User({firstname: "Josh", bio: "I like sushi!"})
let abdullah  = new User({firstname: "Abdullah", bio: "I like to Marlboro !"})


josh.save(function(error, newUser) {
  console.log(newUser)
})

abdullah.save(function(error, newUser) {
  console.log(newUser)
})

//find users saved


//creating posts
let jobOffer  = new User({userid: "Josh", title: "I like sushi!"})
let picnic  = new User({userid: "Abdullah", title: "I like to Marlboro!"})


//creating comments
let jobOffer  = new User({postid: "Josh", commentbody: "I like sushi!"})
let picnic  = new User({postid: "Abdullah", commentbody: "I like to Marlboro!"})

/


//Finding all users w/ at least one post
Dish.find({ post: {$type: "array", $not {$size: 0}}},
  function(error, ) {
    console.log()
  }


  /*
  //pushing in posts by userid
  Post.findById('5b3b9b2a58854941fd2b99d2',function(error,foundDish){
    foundDish.reviews.push(new Review({///}))

  //pushing comments by postid

  }) */






//let post = new Post({ title: "New Skill", description: " "})


//
