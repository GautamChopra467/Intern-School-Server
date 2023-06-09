const Admin = require('../models/adminModel');
const jwt  = require("jsonwebtoken");

module.exports.CheckAdmin = async(req,res,next)=>{
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token,process.env.JWT_SECRET,async(err,decodedToken)=>{   
            if(err){
                
                res.json({
                        status:false,
                        message:"token not found"
                    });
                next();
            }else{
                    const user = await Admin.findById(decodedToken.id)
                  
                    if(user)
                    {  
                        res.json({
                            status:true,  
                            user:user.email,
                            id:decodedToken.id,
                            role:user.role
                        })
                    
                    }
                else{
                    res.json(
                        {
                            status:false,
                            message:"User not found"
                        })
                    next();

                }
            }
        })
    }else{

        res.json(
            {
                status:false,
                message:"nothing found"
            })
        next()
    }
}