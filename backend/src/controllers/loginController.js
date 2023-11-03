const bcrypt=require("bcryptjs")

const userModel=require("../models/usersModels")
const getToken = require("../helpers/gets")

const loginController={
    loginUser:async (request,response)=>{
        try {

            const{email,password}=request.body
            const userFound=await userModel.findOne({email})

            if (userFound) {
                const isValidPass=await bcrypt.compare(password,userFound.password)
                
                if (isValidPass) {
                    const token=await getToken(
                        {id:userFound._id,
                        name:userFound.name})

                        response.json(token)
                        
                } else {
                    response.json({msg:'La informacion ingresada no se encuentra en la base de datos'})
                }
                
                
            } else {
                response.json({msg:'La informacion ingresada no se encuentra en la base de datos'})
            }


            console.log('user found:',userFound)
           

        } catch (error) {
            response.json({msg:'Error al ingresar'})
        }
    }
}

module.exports=loginController