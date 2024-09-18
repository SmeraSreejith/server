const users = require('../model/userModel')
const jwt = require('jsonwebtoken')




//login

exports.loginController = async(req,res)=>{
    const{email,password} = req.body

    try {
        const existingUser = await users.findOne({email,password})

        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},'supersecretKey')
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(406).json('Invalid emailId or password')
        }


    } catch (error) {
       res.status(401).json(error) 
    }
}