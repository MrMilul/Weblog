require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const db = require('./confiq/db')
const blogRouter = require('./routes/createPost')


db()


app.use('/api/blog', blogRouter)

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})