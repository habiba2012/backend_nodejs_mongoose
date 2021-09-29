const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('UserSignUp');

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

module.exports.login = async (req, res) => {
    try {
      const { email, password } = req.body
  
      const user = await User.findOne({ email }).exec()
  
      if (!user) return res.status(400).send('No user found')
  
      const match = await comparePassword(password, user.password)
  
      if (!match) return res.status(400).send('Password didn\'t match.')
  
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      })
      user.password = undefined
      res.cookie('token', token, {
        httpOnly: true,
      })
      res.json(user)
    } catch (err) {
      console.log(err)
      return res.status(400).send('Error. Try again.')
    }
  }