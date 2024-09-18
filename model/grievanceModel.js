const mongoose = require('mongoose')

const grievanceSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
   statement:{
    type:String,
    required:true
   },
   remedy:{
    type:String
    
   },
   userId:{
    type:String,
    required:true
   }
})

const grievances = mongoose.model("grievances",grievanceSchema)

module.exports = grievances