const Company = require('../models/companyModel')
const jwt  = require("jsonwebtoken")

module.exports.CheckCompany = async(req,res,next)=>{
   
    const token = req.cookies.jwt;
   
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,async(err,decodedToken)=>{   
            if(err){
                
                res.json({
                        status:false,
                        message:"Token not found"
                    });
                next();
            }else{
                    const company = await Company.findById(decodedToken.id)
                  
                    if(company)
                    {  
                        res.json({
                            status:true,  
                            company:company.email,
                            id:decodedToken.id
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
                message:"Token not found"
            })
        next()
    }
}