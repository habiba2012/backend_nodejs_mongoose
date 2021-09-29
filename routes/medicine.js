var express = require('express');
var router = express.Router();
const {
    createMedicine,
    getMedicine,
    updateEnquiry,
    deleteEnquiry


} = require('../controllers/medicine_vendor.controller');



router
    .route('/')
    .post(createMedicine)
    .get(getMedicine)


router
    .route('/:id')
    .get(getMedicine)
    .put(updateEnquiry)
    .delete(deleteEnquiry);

module.exports = router;