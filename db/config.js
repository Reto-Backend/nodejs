const mongoose = require('mongoose');
const conectarDB = async () => {
    try {
        await mongoose.connect('', {
            useUnifiedTopology:true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log('Conectado')
    } catch (err) {
        console.log(err)
        throw new Error('Error en la hora de iniciar la conexion')
    }
}
module.exports={
    conectarDB
}
