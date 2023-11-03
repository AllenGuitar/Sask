const bcrypt=require('bcryptjs')
const usersModel = require("../models/usersModels")
const getToken=require('../helpers/gets')

const usersController={
    createUser:async (request,response)=>{try {
        const {name,email,password,address,pets}=request.body
        const hashPass=await bcrypt.hash(password,10)
        const newUser=new usersModel({name,email,password:hashPass,address,pets})

        const userCreated = await newUser.save()
        const token=await getToken({
            id:userCreated._id,
            name:userCreated.name
        })
        response.json(token)
    } catch (error) {
        response.json({msg:'Error Gatastrofico'})
    }
    },
    getUsers:async (request,response)=>{
        try {
        const allUsers=await usersModel.find()
        response.json({allUsers})
    } catch (error) {
        response.json({msg:'Error Gatastrofico al traer a los usuarios'})
    }
    },
    getUser:async (request,response)=>{
        try {
            const user=await usersModel.findById(request.params.id)
            if(user) response.json({user})
            else throw new Error('No se encontro el usuario')
        } catch (error) {
            response.json({msg:'Error Gatastrofico al traer al usuario'})
        }
    },
    updateUser:async (request,response)=>{
        try {
            const userUpdated=await usersModel.findByIdAndUpdate(
                request.params.id,
                request.body
            )
            if(userUpdated) response.json({userUpdated:userUpdated._id})
            else throw new Error('No se encontro el usuario')
        } catch (error) {
            response.json({error:error.msg || 'Error Gatastrofico al actualizar al usuario'})
        }
    },
    deleteUser:async (request,response)=>{
        try {
            const userDeleted = await usersModel.findByIdAndDelete(
                request.params.id
            )
            if(userDeleted) response.json({userDeleted:userDeleted._id})
            else throw new Error('User not found')
        } catch (error) {
            response.json({error:error.msg || 'Error Gatastrofico al eliminar el usuario'})
        }
    }
}

module.exports=usersController