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



//Get all shows watched by a user

router.get('/:id/shows',async(req,res)=>{
    user = await User.findByPk(req.params.id)
    shows_watched = await user.getShows()
    res.json(shows_watched)

})


//Adds a User ID to a show
router.put('/:userid/shows/:showid',async(req,res)=>{

    userUpdated = await User.findAll({where:{id:req.params.userid}})
    
    titleInstance = await Show.findAll({where:{id:req.params.showid}})
    await userUpdated[0].addShow(titleInstance)
    res.json(await userUpdated[0].getShows())
})






module.exports = router