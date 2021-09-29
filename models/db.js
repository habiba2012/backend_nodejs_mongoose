const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://covid:test123@cluster0.yes5i.mongodb.net/test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    (err) => {
        if (!err) { console.log('Successfully connected to MongoDB.'); }
        else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
    });

require('./user.model');
require('./user_signup.model')
require('./user_review.model')
require('./doctor_appointment.model')
require('./user_role.model')
require('./medicine_vendor.model')




