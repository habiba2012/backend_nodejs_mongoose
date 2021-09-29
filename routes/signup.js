const express = require('express');
const {
    postSignup,
    getSignup,

} = require('../controllers/userSignup.controller');


const router = express.Router();



router
    .route('/')
    .post(postSignup)
    .get(getSignup);


module.exports = router;