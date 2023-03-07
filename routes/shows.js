const express = require('express')
const {check,validationResult} = require('express-validator')
const {Show} = require('../models/Show')
const shows_router = express.Router()


shows_router.get('/',async(req,res)=>{
    res.json(await Show.findAll())
})

shows_router.get('/id=:id',async(req,res)=>{
    res.json(await Show.findAll({where:{id:req.params.id}}))
})

shows_router.get('/genre=:genre',async(req,res)=>{
    res.json(await Show.findAll({where:{genre:req.params.genre}}))
})

module.exports = shows_router