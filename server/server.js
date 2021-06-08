require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require("cors")
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const db = require('./confiq/db')
const blogRouter = require('./routes/createPost')


db()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(cors())
app.use('/api/blog', blogRouter)



app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})