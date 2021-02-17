const User=require('../model/user');
const bcrypt=require('bcryptjs');
const {generarJWT}=require('../helpers/generarToken')
const register=async(req,res)=>{
    const {email}=req.body;
    try{
        let usuario=await User.findOne({email})
        if(usuario){
            return res.status(500).json({
                ok:false,
                msg:'El correo ya existe!',    
            })
        }
        usuario=new User(req.body);
        const salt=bcrypt.genSaltSync()
        usuario.password=bcrypt.hashSync(usuario.password,salt);
        await  usuario.save()
        const jwt=await generarJWT(usuario.id,usuario.name)
        res.status(201).json({
            ok:true ,
            uid:usuario.id,
            namme:usuario.name,
            jwt               
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            ok:false,
            msg:'Comuniquese con el administrador',
            err
        })
    }
}

const getUsers=async(req,res)=>{
    let usuarios=await User.find();
    usuarios=usuarios.map(u=>{return {id:u._id,name:u.name,email:u.email,password:u.password}})
    res.json({
        ok:true,
        usuarios
    })
}

module.exports={
    register,
    getUsers
}