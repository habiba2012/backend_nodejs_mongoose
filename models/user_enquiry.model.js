const mongoose = require('mongoose');
// var mexp = require('elasticsearch');

const EnquirySchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: [true, 'Id is required']
    },
    user_enquiry_child: {
        type: Object,
        enquiry_id: {
            type: String,
            required: [true, 'Id is required']
        },
        enquiry: {
            type: String,
        },
        created_at: {
            type: Date,
            default: Date.now()
        },
        remark: {
            type: String,
        },
        status: {
            type: String
        },
        file_url: {
            type: String,
        },

    }
})


// EnquirySchema.plugin(mexp);
mongoose.model('Enquiry', EnquirySchema, 'enquiry')



