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

  try{
    //await Blog.deleteOne( { title: request.params.i})
    await Blog.findByIdAndDelete(request.params.i)
  }
  catch{
    console.log(request.params.i);
  }

  response.status(201).end()

})

blogrouter.put('/:i',async(request,response) => {

  const body = request.body;

  const nb = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: parseInt(body.likes)
  }

  try{
    await Blog.findByIdAndUpdate(request.params.i,nb)
  }catch{
    console.log('rip');
  }

  response.status(201).end()
})

module.exports = blogrouter
  
