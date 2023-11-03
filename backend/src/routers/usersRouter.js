const {Router}=require('express')
const usersController = require('../controllers/usersController')

const usersRouter=Router()

usersRouter.post('/',usersController.createUser)
usersRouter.get('/',usersController.getUsers)
usersRouter.get('/:id',usersController.getUser)
usersRouter.put('/:id',usersController.updateUser)
usersRouter.delete('/:id',usersController.deleteUser)

module.exports=usersRouter