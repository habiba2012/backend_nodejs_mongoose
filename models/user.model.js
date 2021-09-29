const mongoose = require('mongoose');
// var mexp = require('elasticsearch');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



var userSchema = new mongoose.Schema({
     name: {
         type: String,
         required: [true, 'Full name can\'t be empty'], 
         trim: true,
         maxlength: [50, 'Name cannot be more than 50 characters']
     },

    email: {
        type: String,
        required: [true, 'Email can\'t be empty'],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    saltSecret: String
});

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// // Encrypt password using bcrypt
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        });
}


// userSchema.plugin(mexp);
mongoose.model('User', userSchema, "userDetails");