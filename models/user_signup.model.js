const mongoose = require('mongoose');
// var mexp = require('elasticsearch');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSignupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Full name can\'t be empty'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },


    email: {
        type: String,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
  /*   address: {
        type: String,
        required: [true, 'Please add an address']
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone number can not be longer than 20 characters'],
        unique: true
    }, */
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    saltSecret: String
});


// // Encrypt password using bcrypt
userSignupSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
userSignupSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSignupSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        });
}


//  userSigninSchema.plugin(mexp)
mongoose.model('UserSignUp', userSignupSchema, "signup");