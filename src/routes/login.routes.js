const express = require('express');
const router = express.Router();
const Login = require('../models/login');
const jwt = require('jsonwebtoken');

//crea una nueva entrada en la base de datos de acuerto al Schema definido en elarchivo login.js

router.post('/', async (req, res) =>{
  const user = await Login.findOne({ usuario: req.body.usuario });
    if (user.password != req.body.password) {
        res.json({status: 'datos incorrectos'});
    } else {


    const tokenPayload = {
        userId: user.id,
      };
      
    const tokenExpirePeriod = (60 * 60 * 1);
    const jwtSecret = 'test-jwt-secret';

    async function generateToken(payLoad, expiresIn = tokenExpirePeriod) {
      const isObject = (typeof payLoad === 'object');

        if (!payLoad) {
        const error = new TypeError('Token Payload Should Not Be Empty');
        throw error;
        }

        if (!isObject) {
          const error = new TypeError('Token Payload Must Be An Object');
        throw error;
        }

        return new Promise((resolve, reject) => {
            jwt.sign(payLoad, jwtSecret, { expiresIn }, (error, token) => {
        if (error) {
            reject(error);
        } else {
        resolve(token);
        }
        });
        });
    }
      const token = await generateToken(tokenPayload);
      const data = {
        token,
        nombre: user.nombre,
        usuario: user.usuario,
        password: user.password,
        status: "ok"
      };
  
      res.json(data);
    }       
});

router.get('/', async (req, res) => {
    const tasks = await Login.find();
 
    res.json(tasks);
});

module.exports=router;