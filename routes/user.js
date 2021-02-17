const {Router}=require('express');
const {check}=require('express-validator');
const { register,getUsers } = require('../controller/user');
const { validarCampos } = require('../middleware/validar-campo');
const router=Router();

router.post('/user',[
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').not().isEmpty(),
    check('email','debe ser un email valido').isEmail(),
    check('password','El password es obligatorio').not().isEmpty(),
    check('password','el password debe tener como minimo 6 caracteres').isLength({min:6}),
    validarCampos
],register);

router.get('/user',getUsers)
module.exports=router;