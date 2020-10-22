const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const DBschema = require('../schemadata/Databaseschema')




router.get('/',async(req, res)=>{
  try{
    const news = await DBschema.find()
     res.status(200).json(news)

  }catch(err){
    res.status(400).send("Error" + err)
  }
})

router.get('/:id',async(req, res)=>{
  try{
    const news = await DBschema.findById(req.params.id)
     res.status(200).json(news)

  }catch(err){
    res.status(400).send("Error" + err)
  }
})


router.post('/', async(req, res)=>{
  const incoming = new DBschema({
    name : req.body.name,
    age: req.body.age,
    email: req.body.email,
  })
  try {
    const data = await incoming.save()
    res.status(200).json(data)

  }catch(error){
    res.status(400).send('Error' + err)

  }
})

router.patch('/',async(req, res)=>{
  try{
    const news = await DBschema.find()
     res.status(200).json(news)

  }catch(err){
    res.status(400).send("Error" + err)
  }
})


router.delete('/',async(req, res)=>{
  try{
    const news = await DBschema.find()
     res.status(200).json(news)

  }catch(err){
    res.status(400).send("Error" + err)
  }
})
















module.exports = router;