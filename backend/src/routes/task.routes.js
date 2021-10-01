const express = require('express');
const login = require('../models/login');
const router = express.Router();
const authService = require('../services/auth.service')

const Task = require('../models/task');


//obtiene una consulta a la base de datos en el navegador
router.get('/', async (req, res) => {
    const tasks = await login.find();
 
    res.json(tasks);
});
//crea una nueva entrada en la base de datos de acuerto al Schema definido en elarchivo task.js
router.post('/', async (req, res) =>{
    const { title, description } = req.body;
    const task =new Task({title, description});
    await task.save();
    console.log(task);
    //res.json('recibido');
    res.json({status: 'tarea guardada'});
});



//envia una peticion a el frontend para asi editar los datos
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

//metodo para actualizar un registro de la base de datos
router.put('/:id', async (req,res) => {
    const { title, description } = req.body;
    const newTask = {title, description};
    
    //obtiene el id por consola
    //console.log(req.params.id);
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'actualizado'});

});
//borra un registro en la base
router.delete('/:id', async (req,res) => {

    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'eliminado'});

});




//LOGIN Y REGISTRO/////////////

router.post('/login', async (req, res) => {
  try {
    const { usuario, password } = req.body;
    if(!usuario || !password){
        return res.status(400).json('email and password required');
    }
    let token = await authService.login(req.body);
    if(token){
        res.status(token.code).json(token);
    }
} catch (error) {
    res.send(error);
}
  })


  
  router.post('/register', async (req, res) => {
    try {
      const user = new login(req.body);
      const userSaved = await authService.register(user);
      res.send(userSaved);
    } catch (error) {
      res.send(error);
    }
  })






module.exports=router;