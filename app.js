// using mongodb to store our data base 
// using express web framework
//using mongoose a tool in mongo db

const express = require('express')
const mongoose = require('mongoose')
const port = 1234;
//declearing the url
const url = 'mongodb://localhost/giddyDB'



// open our server
const app = express();



//connecting to our data base

mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection



con.on('open', ()=>{
    console.log('connected...')
})



const callroute = require('./Router/router')
app.use('/',callroute)




app.listen(port, ()=>{
    console.log('listeng on port')
})