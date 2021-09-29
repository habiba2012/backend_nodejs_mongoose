const mongoose = require('mongoose');
var mexp = require('elasticsearch');

const CategorySchema = new mongoose.Schema({

    category: {
        type: String,
        required: [true, 'Category is required']
    },
    picture: {
        type: String,
    },
    icon: {
        type: String,
    },
    description: {
        type: String,
    },
    short_desc: {
        type: String,
    },
    created_by: {
        type: String,
    },
    status: {
        type: String
    },
    subcategory: {
        type: object,
        category_id: {
            type: string,
            required: [true, 'Id is required']
        },

        status: {
            type: String
        }
    }
})
CategorySchema.plugin(exp)
mongoose.model('category', CategorySchema)

