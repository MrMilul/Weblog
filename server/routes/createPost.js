const express = require("express")
const Router = express.Router()


const Blog = require('../model/posts')
const multer = require("multer")


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
            return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
        }
        cb(null, true)
    }
});

const upload = multer({ storage: storage }).single("file");


Router.post("/uploadfiles", (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err });
        }
        return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename });
    });
});


Router.post("/createPost", (req,res)=>{

    const newPost = new Blog({
        content: req.body.content
    })
    
    newPost.save((err, postInfo)=>{
        if(err){
            return res.status(400).json({
                message: err, 
            })
        }
        return res.status(200).json({
            message: postInfo
        })
    })
})



module.exports = Router

