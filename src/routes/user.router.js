const { getAll, create, remove, update, login } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/verifyJWT');

const routerName = express.Router();

routerName.route('/')
    .get(verifyJwt,getAll)
    .post(create);
routerName.route('/login')
     .post(login)
routerName.route('/:id')
    
    .delete(verifyJwt,remove)
    .put(verifyJwt,update);

module.exports = routerName;