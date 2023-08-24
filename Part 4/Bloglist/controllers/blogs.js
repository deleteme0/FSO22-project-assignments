const blogrouter = require('express').Router()
const Blog = require('../models/blog')


blogrouter.get('/', async (request, response) => {

  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

blogrouter.post('/', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

blogrouter.delete('/:i', async(request,response) => {

  await Blog.deleteOne( { title: request.params.i})

  response.status(201).end()

})

module.exports = blogrouter
  
