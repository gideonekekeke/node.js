const express = require('express')
const router = express.Router()
const shemaDB = require('../schemadata/Databaseschema')





router.get('/', async(req, res)=>{
  try {
    const files = await shemaDB.find()
    res.status(200).json(files)
  

  }
  catch (err){
    res.status(400).json('error' + err)
  }
})


router.get('/:id', async(req, res)=>{
 try{
  const files = await shemaDB.findById(req.params.id)
  res.status(200).json(files)

  }catch(err){
    res.json(files)
  }
})



router.post('/', async(req, res)=>{
  const newpost = new shemaDB({
    name : req.body.name,
    email : req.body.email
  })
  try {
  const file = await newpost.save()
  res.status(201).json(file)
  }
  catch (err){
    res.status(404).json('Error' + err)
  }
})





module.exports =router;