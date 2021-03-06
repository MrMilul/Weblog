const mongoose = require('mongoose')


const PostsSchema = new mongoose.Schema({
    content: {
        type: String, 
        required: true
    }
}, 
    {timestamp: true}
)

module.exports = mongoose.model("Blog", PostsSchema)