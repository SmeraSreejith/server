//import dotenv
require('dotenv').config()
//import express
const express=require('express')
//import cors
const cors = require('cors')

//import router
const router  = require('./routes')

//import connection.js
require('./connection')

//create express server
const gfServer = express()

//use of cors
gfServer.use(cors())

//use json() method 
gfServer.use(express.json())

//use router
gfServer.use(router)


//set port for server
PORT = 4000 || process.env.PORT

//listen to the port
gfServer.listen(PORT,()=>{
   console.log(`server running sucessfully at port number:${PORT} `);
   
})
