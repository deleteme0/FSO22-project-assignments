
const userRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('bcrypt')

userRouter.post('/login',async(request,response)=>{
    const {username,password} = request.body;

    const Ruser = await User.findOne({username})

    if (!(Ruser)){
        response.status(404).send("LLL").end()
        return
    }
    console.log(Ruser)

    if (!(await bcrypt.compare(password,Ruser.passwordhash))){
        response.status(404).send("wrong pass").end()
        return
    }

    const utoken = {
        username: username,
        id: Ruser.id
    }

    
  const token = jwt.sign(utoken, process.env.SECRET)

  response.status(202).send(token)
})

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

    const all = await User.find({}).populate('blogs', {url:1,title:1,author:1,id:1})



    response.json(all)

})


module.exports = userRouter
  