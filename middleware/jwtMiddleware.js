const jwt = require('jsonwebtoken')

const jwtmiddleware = (req,res,next)=>{

    console.log('Inside jwt middleware');

    //access token
    const token = req.headers["authorization"].split(' ')[1]
   /*  console.log(token); */

    //verify
    try {
        
        const jwtResponse = jwt.verify(token,'supersecretKey')
        console.log(jwtResponse);
        req.payload= jwtResponse.userId
        next()

    } catch (error) {
        res.status(401).json('Authorization failed ... Please Login', error)
    }

    
    

}

module.exports = jwtmiddleware