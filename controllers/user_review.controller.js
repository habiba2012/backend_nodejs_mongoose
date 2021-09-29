const mongoose = require('mongoose');

const Review = mongoose.model('UserReview');


// Handle --->post-add review 
exports.createReview = function (req, res) {
    const review = new Review();
    review.user_id = req.body.user_id;
    review.reviewer_id = req.body.reviewer_id;
    review.rating = req.body.rating;
    review.created_at = req.body.created_at;
    review.tags = req.body.tags;
    review.status = req.body.status;
    // save the review and check for errors
    review.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New review created!',
            data: review
        });
    });
};

// get review  --->get api
exports.getReview = function (req, res) {
    Review.findById(req.params.user_id, function (err, review) {
        if (err)
            res.send(err);
        res.json({
            message: 'Review loading..',
            data: review
        });
    });
};

//@desc     get single review
// @route   api/review/:id
module.exports.getReview = async (req, res, next) => {
    try {
        const review = await Review.findById(req.params.id);
        res.status(200).json({ success: true, data: review })
    } catch (err) {
        res.status(400).json({ success: false })
    }
}

// Handle update review info
exports.updateReview = function (req, res) {
    Review.findById(req.params.reviewer_id, function (err, review) {
        if (err)
            res.send(err);

        review.status = req.body.status;
        // save the update and check for errors
        review.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'review Info updated',
                data: review
            });
        });
    });
};

// @desc      Delete review by id
// @route     DELETE /api/review/:id

module.exports.deleteReview = async (req, res, next) => {
    const review = await Review.findByIdAndDelete(req.params.id);
    try {
        if (!review) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
    } catch (err) {
        res.status(400).json({ success: false })
    }

};

// @desc       delete all 
// @route      /api/review
module.exports.deleteReview = async (req, res, next) => {
    try {
        await Review.deleteMany();
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({ success: false })
    }
};

