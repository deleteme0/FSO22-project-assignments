const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const exblogs = [
  {
    title: 'Hello',
    author: 'this',
    url: 'pagman.com',
    likes: 21
  },
  {
    title: 'Hello2',
    author: 'this2',
    url: 'pagman2.com',
    likes: 212
  }
]

const api = supertest(app)

test('Blog post count', async () => {
  const notes = await api.get('/api/blog')

  let ctr = 0

  notes.body.forEach(element => {
    ctr += 1
  });

  expect(ctr).toEqual(2)
})

test('Blog id exists', async () =>{

  const notes = await api.get('/api/blog')

  expect(notes.body[0].id).toBeDefined()
})

test('Blogs post check', async() =>{

  const newBlog = {
    title: 'Hello3',
    author: 'this3',
    url: 'pagman3.com',
    likes: 2121
  }

  await api.post('/api/blog',newBlog)

  const allblogs = await api.get('/api/blog')

  expect(allblogs.body.length).toEqual(3)
})

test('Blog delete', async() => {
  
  
  const ll = await api.delete('/api/blog/Hello')
  
  const allb = await api.get('/api/blog')
  

  expect(allb.body.length).toEqual(1)
},10000)

beforeEach(async () =>{
  await Blog.deleteMany({})
  const nb = new Blog(exblogs[0])
  await nb.save()
  const nb2 = new Blog(exblogs[1])
  await nb2.save()
})

afterAll(async () => {
  await mongoose.connection.close()
})