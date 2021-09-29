var express = require('express');
var router = express.Router();
const {
    createEnquiry,
    getEnquiry,
    updateEnquiry,
    deleteEnquiry


} = require('../controllers/user_enquiry.controller');



router
    .route('/')
    .post(createEnquiry)
    .get(getEnquiry)


router
    .route('/:id')
    .get(getEnquiry)
    .put(updateEnquiry)
    .delete(deleteEnquiry);

module.exports = router;