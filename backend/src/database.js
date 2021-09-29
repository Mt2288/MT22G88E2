const mongoose = require('mongoose');

//URL A LA BASE DE DATOS
const URI = 'mongodb+srv://jaiber:nintendo64@freecluster.2o9li.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//MENSAJE DE CONEXION EXITOSA
mongoose.connect(URI)
    .then(db => console.log('base de datos esta conectada'))

    .catch(err => console.error(err));

module.exports = mongoose;

