const express = require('express');
const {
    postSignin,
    getSignin
} = require('../controllers/userSignin.controller');

const { protect } = require('../middleWare/auth')

const router = express.Router();



router
    .route('/')
    .post(postSignin)
    .get(getSignin);


module.exports = router;