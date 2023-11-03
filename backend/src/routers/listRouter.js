const {Router}=require('express')
const listRouter = require('../controllers/listController')

const listsRouter=Router()

listsRouter.post('/',listRouter.createPet)
listsRouter.get('/',listRouter.getAllPets)
listsRouter.get('/:id',listRouter.getOnePet)
listsRouter.put('/:id',listRouter.updatePet)
listsRouter.delete('/:id',listRouter.deletePet)

module.exports=listsRouter