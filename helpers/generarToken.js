const jwt=require('jsonwebtoken')
const generarJWT=(uid,name)=>{
    return new Promise((resolve,reject)=>{
        const payload={uid,name}
        jwt.sign(payload,'llave_super_secreta',{
            expiresIn:'2h'
        },(err,token)=>{
            if(err){
                console.log(err)
                reject('Ups... no se puedo generar el token')
            }

            resolve(token)
        })
    })
}

module.exports={
    generarJWT
}