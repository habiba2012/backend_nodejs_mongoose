const mongoose = require('mongoose');

/* mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('Successfully connected to MongoDB.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});
 */
mongoose.connect('mongodb+srv://habiba:habiba12309@cluster0.bmjhc.mongodb.net/findooztest?retryWrites=true&w=majority',
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
require('./user_signin.model')
require('./user_review.model')
require('./user_appointment.model')
require('./user_role.model')
require('./user_enquiry.model')




