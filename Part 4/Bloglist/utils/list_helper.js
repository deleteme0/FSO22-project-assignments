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



module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
}