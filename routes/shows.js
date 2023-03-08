const express = require('express')
const {check,validationResult} = require('express-validator')
const {Show} = require('../models/Show')
const router = express.Router()

//Gives all shows
router.get('/',async(req,res)=>{
    res.json(await Show.findAll())
})


//Gives a single show by ID
router.get('/id=:id',async(req,res)=>{
    res.json(await Show.findAll({where:{id:req.params.id}}))
})


//Gives all shows of a genre
router.get('/genre=:genre',async(req,res)=>{
    res.json(await Show.findAll({where:{genre:req.params.genre}}))
})


//Update Rating of a show that has been watched

router.put('/show_id=:show_id/rating=:rating',async(req,res)=>{
    found_show = await Show.findByPk(req.params.show_id)
    
    if(found_show.userId===null){
        throw new Error('Cannot rate a show that has not been watched')
    }
    await Show.update({rating:req.params.rating},{where:{id:req.params.show_id}})
    res.json(await Show.findByPk(req.params.show_id))

})


//Update the status of a show

router.put('/show_id=:show_id/new_status=:new_status',async(req,res)=>{
    found_show = await Show.findByPk(req.params.show_id)
    await Show.update({status:req.params.new_status},{where:{id:req.params.show_id}})
    res.json(await Show.findByPk(req.params.show_id))
})




//Delete a show

router.delete('/delete/show_id=:show_id',async(req,res)=>{
    await Show.destroy({where:{id:req.params.show_id}})
    res.json(await Show.findAll())
})


module.exports = router