const{Schema,model}=require('mongoose')

const userSchema=new Schema({
    name:{type:String},
    email:{type:String,require:true},
    password:{type:String,require:true},
    address:{type:String},
    pets:{type:Boolean}
},  
    //obtener la fecha y la hora en la que un usuario es agregado o actualizado xd
    //el timestamps
    //el version es para que mongo no ponga una version a cada rato
    {timestamps:true,versionKey:false}
)

module.exports=model('UserModel',userSchema)