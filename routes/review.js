const express = require('express');
const router = express.Router();

const {
    createReview,
    getReview,
    updateReview,
    deleteReview

} = require('../controllers/user_review.controller');


// app.use(protect)
const { protect } = require('../middleWare/auth')
router
    .route('/')
    .post(createReview, protect)
    .get(getReview)
    .delete(deleteReview)



router
    .route('/:id')
    .get(getReview)
    .put(updateReview)
    .delete(deleteReview);


module.exports = router;