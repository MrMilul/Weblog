const express = require("express")
const Router = express.Router()

const multer = require("multer")



const Blog = require('../model/posts')


Router.post("/createPost", (req,res)=>{

    const newPost = new Blog({
        content: req.body.content
    })
    
    newPost.save((err, postInfo)=>{
        if(err){
            return res.status(400).json({
                message: err
            })
        }
        return res.status(200).json({
            message: postInfo
        })
    })
})

Router.post('/uploadFiles', (req, res)=>{

})




module.exports = Router

