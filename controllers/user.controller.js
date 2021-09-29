const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

// @desc      Enroll user
// @route     POST /user/enroll
module.exports.enroll = (req, res, next) => {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    /*  user.phone = req.body.phone;
     user.address = req.body.address; */
    user.save((err, doc) => {
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
//@desc get   all user
// @ route   api/user/enroll
module.exports.getProfile = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({ success: true, count: users.length, data: users });
    } catch (err) {
        res.status(400).json({ success: false })
    }
}

//@desc     get single user
// @route   api/user/enroll/:id
module.exports.getProfile = async (req, res, next) => {
    try {
        const users = await User.findById(req.params.id);
        res.status(200).json({ success: true, data: users })
    } catch (err) {
        res.status(400).json({ success: false })
    }
}



// @desc      Update profile
// @route     PUT /api/v1/users/:id

module.exports.updateProfile = async (req, res, next) => {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json({
        success: true,
        data: users
    });
};

// @desc      Delete user by id
// @route     DELETE /api/user/:id

module.exports.deleteProfile = async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);
    try {
        if (!user) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
    } catch (err) {
        res.status(400).json({ success: false })
    }

};

// @desc       delete all 
// @route      /api/user/
module.exports.deleteProfile = async (req, res, next) => {
    try {
        await User.deleteMany();
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({ success: false })
    }
};