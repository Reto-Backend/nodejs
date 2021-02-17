const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    email:{
        type:String,
        unique:true,
        required:[true,'El email es obligatorio']
    },
    password:{
        type:String,
        required:[true,'El password es obligatorio']
    }
})

module.exports=mongoose.model('User',userSchema);