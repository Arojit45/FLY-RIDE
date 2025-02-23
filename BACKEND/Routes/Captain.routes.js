const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const CaptainController = require('../Controllers/Captain.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First Name must be at least 3 characters long.'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('Vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters long.'),
    body('Vehicle.plate').isLength({min:3}).withMessage('Plate must be at least 3 characters long.'),
    body('Vehicle.Capacity').isLength({min:1}).withMessage('Capacity must be at least 1 characters long.'),
    body('Vehicle.vehicalType').isLength({min:1}).withMessage('Vehicle Type must be at least 1 characters long.'),
],CaptainController.registerCaptain);

module.exports = router;