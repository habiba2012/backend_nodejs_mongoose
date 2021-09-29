var express = require('express');
var router = express.Router();
const {
    authenticate
   


} = require('../controllers/login.controller');



router
    .route('/')
    .post(authenticate)
    





module.exports = router;