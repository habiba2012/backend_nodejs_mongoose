const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UserSignIn = mongoose.model('UserSignIn');

// @desc      signin user
// @route     POST user/signin
module.exports.postSignin = (req, res, next) => {
    const userDetails = new UserSignIn();
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

module.exports.getSignin = async (req, res, next) => {
    try {
        const userInfo = await UserSignIn.find();

        res.status(200).json({ success: true, count: userInfo.length, data: userInfo });
    } catch (err) {
        res.status(400).json({ success: false })
    }
}





