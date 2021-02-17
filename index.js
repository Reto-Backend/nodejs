const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const { conectarDB } = require('./db/config')

conectarDB();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())


app.use('/',require('./routes/user'))

app.listen(4000,()=>{
    console.log(`listen in port ${4000}`)
})