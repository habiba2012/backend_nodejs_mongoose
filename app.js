require('./config/config');
require('./models/db');
require('./config/passportConfig');


const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');

var app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use(passport.initialize());

//Route files
const enroll = require('./routes/user')
const signin = require('./routes/signin')
const reviews = require('./routes/review')
const appointments = require('./routes/appointment');
const roles = require('./routes/role')
const enquiry = require('./routes/enquiry')



//Mount Routers
app.use('/api/user/enroll', enroll)
app.use('/api/user/signin', signin)
app.use('/api/reviews', reviews)
app.use('/api/appointments', appointments)
app.use('/api/roles', roles);
app.use('/api/enquiry', enquiry)

/* var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace',
    apiVersion: '7.2', // use the same version of your Elasticsearch instance
}); */

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }

});



// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));