// creating a data base and store the data in (mongoDB)
// using express as a frame work
// also using mongoose as a tool in mongodb

const express = require('express')
const mongoose = require('mongoose')
const port = 800;

//declearing the url
const url = 'mongodb://localhost/codeDB'




// open our express app
const app = express();


// next thing to do is to connect to our database
mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

// now we want to on the connection
con.on('open', ()=>{
    console.log('connected...')

    
})

app.use(express.json())
const callroute = require('./Router/router')

app.use('/', callroute)









app.listen(port, ()=>{
    console.log('listening on port ')
})