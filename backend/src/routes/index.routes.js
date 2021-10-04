const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service')
const User = require("../models/user");

//----------- Auth routes ------------
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json('User and password required')
    }
    let token = await authService.login(req.body)
    if (token) {
      res.status(token.code).json(token)
    } else {
      res.send('Error')
    }
  } catch (error) {
    res.send(error);
  }
})

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    const userSaved = await authService.register(user);
    res.send(userSaved);
  } catch (error) {
    res.send(error);
  }
})

module.exports = router;