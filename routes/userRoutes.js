const express = require('express')
const userController = require('../controller/userController')
// console.log(userController)
const router = express.Router();

router.get('/getAllUsers', userController.getAllUsers);

router.post('/createUser', userController.createUser);

router.get('/getUsersById', userController.getAllUserBYId);

router.post('/signUp', userController.signUp);

router.post('/logIn', userController.logIn);

module.exports= router;
