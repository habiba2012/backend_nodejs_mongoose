
const mongoose = require('mongoose');

// var mexp = require('elasticsearch');

const reviewSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: [true, 'Id is required']
    },
    user_review_child: {
        type: Object,
        reviewer_id: {
            type: String,
            required: [true, 'Id is required']
        },
        rating: {
            type: String,
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        tags: {
            type: String,
        },
        status: {
            type: String
        }


    }


})

// reviewSchema.plugin(mexp);
mongoose.model('UserReview', reviewSchema, "review")

