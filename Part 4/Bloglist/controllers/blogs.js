const blogrouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')


blogrouter.get('/', async(request, response) => {

  const ret = await Blog.find({}).populate('user',{ username: 1,user: 1,id: 1})

  response.json(ret).send()
})

blogrouter.post('/', async(request, response) => {
  
  var newUsr = null
  //app.get('/api/user').then(result => newUsr = result[0])

  const newusr = await User.find({})


  const nb = {
    title: request.body.title,
    author: request.body.author,
    url: request.body.url,
    likes: parseInt(request.body.likes),
    user: newusr[0].id

  }

  const blog = new Blog(nb)

  const res = await blog.save()

  newusr[0].blogs.push(res.id)
  await User.findByIdAndUpdate(newusr[0].id,newusr[0])

  response.status(202).json(res).send()

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
  
