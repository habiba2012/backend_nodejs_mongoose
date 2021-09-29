const mongoose = require('mongoose');
// var mexp = require('elasticsearch');

const AppointmentSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: [true, 'Id is required']
    },
    user_appointment_child: {
        type: Object,
        booking_date_time: {
            type: Date,
            required: [true, 'Date is required']
        },
        created_at: {
            type: Date,
        },
        updated_at: {
            type: String,
        },

        status: {
            type: String
        },
        remark: {
            type: String,
        }
    }


})

// AppointmentSchema.plugin(mexp);
mongoose.model('Appointment', AppointmentSchema, "appointment")



