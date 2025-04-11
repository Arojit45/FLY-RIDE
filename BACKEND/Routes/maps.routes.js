const express = require('express')
const authMiddleware = require("../middlewares/auth.middleware");
const mapController = require('../Controllers/map.controller')
const router = express.Router()
const {query} = require('express-validator')

router.get('/get-coordinate',
    query('address').isString().isLength({min:3}),
    authMiddleware.authUser,mapController.getCoordinates)

module.exports=router