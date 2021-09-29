const mongoose = require('mongoose');
// var mexp = require('elasticsearch');

const MedicineSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: [true, 'Id is required']
    },
    user_order: {
        type: Object,
        order_id: {
            type: String,
            required: [true, 'Id is required']
        },
      
        created_at: {
            type: Date,
            default: Date.now()
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
mongoose.model('Medicine', MedicineSchema, 'medicine')



