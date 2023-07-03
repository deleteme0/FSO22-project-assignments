const express = require('express')
const app = express()
const cors = require('cors')
const {url} = require('./utils/config')


const mongoose = require('mongoose')
const Blog = require('./models/blog')
const Blogr = require('./controllers/blogs')

mongoose.connect(url).then(() => {
    console.log("Connected")
})

app.use(cors())
app.use(express.json())
app.use('/api/blog',Blogr)


module.exports = app