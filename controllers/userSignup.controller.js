const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UserSignUp = mongoose.model('UserSignUp');

// @desc      signin user
// @route     POST user/signin
module.exports.postSignup = (req, res, next) => {
    const userDetails = new UserSignUp();
    userDetails.name = req.body.name;
    userDetails.email = req.body.email;
    userDetails.password = req.body.password;
  /*   userDetails.phone = req.body.phone;
    userDetails.address = req.body.address; */
    userDetails.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email address has found.']);
            else
                return next(err);
        }

    });
}

module.exports.getSignup = async (req, res, next) => {
    try {
        const userInfo = await UserSignIn.find();

        res.status(200).json({ success: true, count: userInfo.length, data: userInfo });
    } catch (err) {
        res.status(400).json({ success: false })
    }
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication

    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}
