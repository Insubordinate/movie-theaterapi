const express = require('express')
const {check,validationResult} = require('express-validator')
const {User,Show} = require('../models/index')
const users_router = express.Router()


//Get All Users
users_router.get('/',async(req,res)=>{
    res.json(await User.findAll())
})


//Get One User
users_router.get('/id=:id',async(req,res)=>{
    res.json(await User.findAll({where:{id:req.params.id}}))
})


users_router.put('/userid=:userid&title=:title',async(req,res)=>{

    userUpdated = await User.findAll({where:{id:req.params.userid}})
    
    titleInstance = await Show.findAll({where:{title:req.params.title}})
    await userUpdated[0].addShow(titleInstance)
    console.log(req.params)
    res.json(await userUpdated[0].getShows())
})




module.exports = users_router