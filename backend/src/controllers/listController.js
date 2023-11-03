const listModel = require("../models/listModels")
const getToken=require('../helpers/gets')

const listController={
    createPet:async (request,response)=>{try {
        const {name,type,years,vaccinated}=request.body
        const newUser=new listModel({name,type,years,vaccinated})

        const listCreated = await newUser.save()
        const token=await getToken({
            name:listCreated.name,
            type:listCreated.type
        })
        response.json(token)
    } catch (error) {
        response.json({msg:'Error Gatastrofico'})
    }
    },
    getAllPets:async (request,response)=>{
        try {
        const allPets=await listModel.find()
        response.json({allPets})
    } catch (error) {
        response.json({msg:'Error Gatastrofico al traer a las mascotas'})
    }
    },
    getOnePet:async (request,response)=>{
        try {
            const pet=await listModel.findById(
                request.params.id
            )
            response.json({pet})
        } catch (error) {
            response.json({msg:'Error Gatastrofico al encontrar a la mascota'})
        }
        },
    updatePet:async (request,response)=>{
        try {
            const petUpdated=await listModel.findByIdAndUpdate(
                request.params.id,
                request.body
            )
            if(petUpdated) response.json({petUpdated:petUpdated._id})
            else throw new Error('No se encontro la mascota')
        } catch (error) {
            response.json({error:error.msg || 'Error Gatastrofico al actualizar a la mascota'})
        }
    },
    deletePet:async (request,response)=>{
        try {
            const petDeleted = await listModel.findByIdAndDelete(
                request.params.id
            )
            if(petDeleted) response.json({petDeleted:petDeleted._id})
            else throw new Error('Pet not found')
        } catch (error) {
            response.json({error:error.msg || 'Error Gatastrofico al eliminar a la mascota de la base de gatos'})
        }
    }
}

module.exports=listController