
const listHelper = require('../utils/list_helper')

const zeroblogs = []

const oneblog=[
    {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
      }
]

const manyblogs=[
    {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
      },
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
      },
      {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
      }
]

test('dummy returns one', () => {

  const result = listHelper.dummy(zeroblogs)
  expect(result).toBe(1)
})

describe('totalLikes tester',()=>{

    test('zero blog return zero', ()=>{

        const result = listHelper.totalLikes(zeroblogs)

        expect(result).toBe(0)
    })

    test('one blog return the likes of the blog itself', ()=>{
        

        const result = listHelper.totalLikes(oneblog)

        expect(result).toBe(7)
    })


    test('Returns correct total likes for multiple blogs', ()=>{
        

        const result = listHelper.totalLikes(manyblogs)

        expect(result).toBe(24)
    })
})

describe('FavouriteBlog test',()=>{

    test('test with 0 blogs',()=>{
        

        const result = listHelper.favouriteBlog(zeroblogs)

        expect(result).toEqual(undefined)
    })

    test('test with 1 blog',()=>{
        
        const result = listHelper.favouriteBlog(oneblog)

        expect(result).toEqual(oneblog)
    })

    test('test with many blogs',()=>{
        
        const result = listHelper.favouriteBlog(manyblogs)

        expect(result).toEqual({
            _id: "5a422b3a1b54a676234d17f9",
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12,
            __v: 0
          })
    })
})