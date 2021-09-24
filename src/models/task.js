const mongoose = require('mongoose');
const { Schema} = mongoose;

//ESQUEMA DE BASE DE DATOS USUARIOS
const TaskSchema = new Schema({
    title: { type: String, required:true },
    description: { type: String, required: true }
});

//EXPORTACION DEL MODULO

module.exports = mongoose.model('Task', TaskSchema);