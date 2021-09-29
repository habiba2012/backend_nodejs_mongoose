var express = require('express');
var router = express.Router();
const {
    enroll,
    getProfile,
    updateProfile,
    deleteProfile


} = require('../controllers/user.controller');



router
    .route('/')
    .post(enroll)
    .get(getProfile)
    .delete(deleteProfile)



router
    .route('/:id')
    .get(getProfile)
    .put(updateProfile)
    .delete(deleteProfile);

module.exports = router;