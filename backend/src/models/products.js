const mongoose = require('mongoose');
const { Schema } = mongoose;

//ESQUEMA DE BASE DE DATOS USUARIOS
const TaskSchema = new Schema({
    identificacion: { type: Number, required: true },
    tipo: { type: String, required: true },
    nombre: { type: String, required: true },
    valor: { type: Number, required: true },
})
//EXPORTACION DEL MODULO

module.exports = mongoose.model('Task', TaskSchema);