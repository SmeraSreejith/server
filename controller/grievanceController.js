const grievances = require("../model/grievanceModel");



exports.submitGrievanceController= async(req,res)=>{
   console.log('Inside submitGrievanceController');
   const userId = req.payload
   console.log(userId);

    const{name,email,statement,remedy}= req.body  

    try {
    const existingGrievance = await grievances.findOne({statement})
    if(existingGrievance){
        res.status(406).json('Grievance already exists')
    }
    else{
        const newGrievance = new grievances({
           name, email,statement,remedy,userId
        })

        await newGrievance.save()
        res.status(200).json(newGrievance)
    }
   } catch (error) {
    res.status(401).json(error)
   }
    
   
}



