const express = require('express')
const {check,validationResult} = require('express-validator')
const {User,Show} = require('../models/index')
const router = express.Router()


//Get All Users
router.get('/',async(req,res)=>{
    res.json(await User.findAll())
})


//Get One User
router.get('/id=:id',async(req,res)=>{
    res.json(await User.findAll({where:{id:req.params.id}}))
})




//Adds a User ID to a show
router.put('/userid=:userid&title=:title',async(req,res)=>{

    userUpdated = await User.findAll({where:{id:req.params.userid}})
    
    titleInstance = await Show.findAll({where:{title:req.params.title}})
    await userUpdated[0].addShow(titleInstance)
    console.log(req.params)
    res.json(await userUpdated[0].getShows())
})



//Get all shows watched by a user

router.get('/:id/shows',async(req,res)=>{
    user = await User.findByPk(req.params.id)
    shows_watched = await user.getShows()
    res.json(shows_watched)

})


module.exports = router