require('./config/config');
require('./models/db');
require('./config/passportConfig');

const jwtHelper = require('./config/jwtHelper');

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
const signup = require('./routes/signup', jwtHelper.verifyJwtToken)
const reviews = require('./routes/review')
const appointments = require('./routes/appointment');
const roles = require('./routes/role')
const medicine = require('./routes/medicine')
const login = require('./routes/login')



//Mount Routers
app.use('/api/user/enroll', enroll)
app.use('/api/user/signup', signup)
app.use('/api/reviews', reviews)
app.use('/api/appointments', appointments)
app.use('/api/roles', roles);
app.use('/api/medicine', medicine);
app.use('/api/user/login', login);

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