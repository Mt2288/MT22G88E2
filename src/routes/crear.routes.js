const express = require('express');
const router = express.Router();
const Login = require('../models/login');

//crea una nueva entrada en la base de datos de acuerto al Schema definido en elarchivo login.js

router.post('/', async (req, res) =>{
    const { nombre, usuario, password } = req.body;
    const crear =new Login({nombre,usuario, password});
    await crear.save();
    console.log(crear);
    //res.json('recibido');
    res.json({status: 'usuario creado'});
});

router.get('/', async (req, res) => {
    const tasks = await Login.find();
 
    res.json(tasks);
});

module.exports=router;