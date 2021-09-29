var express = require('express');
var router = express.Router();
const {
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory


} = require('../controllers/category.controller');



router
    .route('/')
    .post(createCategory)
    .get(getCategory)


router
    .route('/:id')
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory);

module.exports = router;