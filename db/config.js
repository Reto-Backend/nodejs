const mongoose = require('mongoose');
const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://noderest:kWcNvFnXTgM7owmU@cluster0.ey963.mongodb.net/retonode', {
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