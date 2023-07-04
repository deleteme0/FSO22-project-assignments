const ld = require('lodash')

const dummy = (blogs) => {
    // ...
    return 1;
}

const totalLikes = (blogs) => {

    var sum = 0

    blogs.forEach(element => {
        sum += element.likes
    });

    return sum
}

const favouriteBlog = (blogs) =>{

    if (blogs.length == 0){
        return undefined
    }

    if (blogs.length == 1){
        return blogs
    }

    var maxlikes = 0

    blogs.forEach(each =>{
        if (each.likes > maxlikes){
            maxlikes = each.likes
        }
    })

    const find_blog = (blog) => {
        return blog.likes == maxlikes
    }

    return blogs.find(find_blog)
}


const mostBlogs = (blogs) => {
    if (blogs.length == 0){
        return undefined
    }

    var arr = {}
    var maxblog = 0
    var au = ''

    const findmaxblog = (blog) => {
        if (blog.author in arr){
            arr[blog.author] += 1
        }
        else{
            arr[blog.author] = 1
        }

        if (arr[blog.author] > maxblog){
            maxblog = arr[blog.author]
            au = blog.author
        } 
    }
    blogs.forEach(findmaxblog)
    var ret = {
        'author': au,
        'blogs': arr[au]
    }
    return ret
}



module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs
}