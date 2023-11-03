const{Schema,model}=require('mongoose')

const listSchema=new Schema({
    name:{type:String,require:true},
    type:{type:String,require:true},
    years:{type:String,require:true},
    vaccinated:{type:Boolean,require:true}
},  
    //obtener la fecha y la hora en la que un usuario es agregado o actualizado xd
    //el timestamps
    //el version es para que mongo no ponga una version a cada rato
    {timestamps:true,versionKey:false}
)

module.exports=model('ListModel',listSchema)