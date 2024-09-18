const express = require('express')
//import usercontroller
const userController = require('./controller/userController')

//import grievancecontroller
const grievanceController = require('./controller/grievanceController')

//superherocontroller
const superherocontroller = require('./controller/superheroController')

const jwt = require('./middleware/jwtMiddleware')
const router = new express.Router()



//register request
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//submit grievance
router.post('/submitgrievance',jwt,grievanceController.submitGrievanceController)

//get grievance
router.post('/getGrievance',superherocontroller.loginController)



module.exports = router