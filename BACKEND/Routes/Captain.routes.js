const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const CaptainController = require('../Controllers/Captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First Name must be at least 3 characters long.'),
    body('fullname.lastname').isLength({min:3}).withMessage('Last Name must be at least 3 characters long.'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('Vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters long.'),
    body('Vehicle.plate').isLength({min:3}).withMessage('Plate must be at least 3 characters long.'),
    body('Vehicle.capacity').isLength({min:1}).withMessage('Capacity must be at least 1 characters long.'),
    body('Vehicle.vehicleType').isLength({min:1}).withMessage('Vehicle Type must be at least 1 characters long.'),
],CaptainController.registerCaptain
);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
],CaptainController.loginCaptain
);
router.get("/profile",authMiddleware.authCaptain,CaptainController.profileCaptain);
router.get("/logout",authMiddleware.authCaptain,CaptainController.logoutCaptain);

module.exports = router;