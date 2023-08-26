
const userRouter = require('express').Router()

const User = require('../models/user')
const bcrypt = require('bcrypt')

userRouter.post('/', async (request,response) =>{

    const {user , username, password} = request.body;

    const hashpass = await bcrypt.hash(password,10)

    const NewUser = new User({
        user: user,
        username: username,
        passwordhash: hashpass
    })

    const saved = await NewUser.save()

    response.status(201).json(saved)
})

userRouter.get('/', async (request,response) =>{

    const all = await User.find({})



    response.json(all)

})


module.exports = userRouter
  