const express = require('express')
const port = 1960;
const server = express()


const name = require('./route')
server.use('/API/V1/codelab', name)
server.use(express.json())


server.listen(port, ()=>{
    console.log('listening on port 1960')
})