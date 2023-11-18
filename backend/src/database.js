const mongoose = require('mongoose')

console.log(process.env.MONGODB_ATLAS_URI)
mongoose
    .connect(process.env.MONGODB_ATLAS_URI)
    .then((db)=>console.log('Wii, habemus conectado a Sask!!'))
    .catch((err)=>console.log('Algo ha salido mal, error gatastrofico!',err))
