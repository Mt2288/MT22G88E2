const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    identificacion: { type: String, unique: true },
    name: { type: String, unique: true },
    lastname: { type: String, unique: true },
    telephone: { type: String, unique: true },
    email: {
        type: String,
        unique: true,
    },
    typeusername: { type: String, unique: true },
    status: { type: String, unique: true },
    password: { type: String, unique: true }
})

module.exports = mongoose.model('users', User)