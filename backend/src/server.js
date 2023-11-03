const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const usersRouter=require('./routers/usersRouter')
const listRouter=require('./routers/listRouter')
const loginRouter=require('./routers/loginRouter')
//creando el servidor oshioshi
const server=express()
//pos aca le damos el puerto en el que va a funcionar osease
const port=process.env.PORT

//aca se le pone obviamenteishon
server.set('port',port)
//morgan es un modulo que ayuda a ver como ingresan los mr requerimientos

server.use(cors())
server.use(express.json())
server.use(morgan('dev'))

//cuando ingresa una peticion va a ejecutar la funcion flesha

server.use('/login/',loginRouter)
server.use('/users/',usersRouter)
server.use('/list/',listRouter)
server.get('/',(request,response)=>{
    response.json({message:'Todo le ha funcionado al genial Allen'})
})

module.exports=server