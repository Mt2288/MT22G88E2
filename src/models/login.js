const mongoose = require('mongoose');
const { Schema} = mongoose;


//ESQUEMA DE USUARIO Y CONTRASEÑA PARA EL LOGIN
const LoginSchema = new Schema({
    nombre: { type: String, required:false },
    usuario: { type: String, required:true },
    password: { type: String, required: true }
});


module.exports = mongoose.model('Login', LoginSchema);