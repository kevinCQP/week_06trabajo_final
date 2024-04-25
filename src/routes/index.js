const express = require('express');
const routerName = require('./user.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users',routerName)

module.exports = router;