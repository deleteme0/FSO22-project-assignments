const express = require('express')
const app = express()
const cors = require('cors')
const {url} = require('./utils/config')


const mongoose = require('mongoose')
const Blogr = require('./controllers/blogs')
const Userr = require('./controllers/users')

mongoose.connect(url).then(() => {
    console.log("Connected")
})

app.use(cors())
app.use(express.json())
app.use('/api/blog',Blogr)
app.use('/api/user',Userr)


module.exports = app