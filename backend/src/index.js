"use strict"
require('dotenv').config()
require('./database')

const server=require('./server')
const port=server.get('port')

server.listen(port,()=>{
    console.log(`Todo corre bien baby, en el puerto ${port}`)
})
