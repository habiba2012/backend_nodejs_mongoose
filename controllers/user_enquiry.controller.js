const mongoose = require('mongoose');

//Import enquiry models 
const Enquiry = require('../models/user_enquiry.model')



// Handle --->post-add enquiry 
exports.createEnquiry = function (req, res) {
    const enquiry = new Enquiry();
    enquiry.user_enquiry_child = request.body.user_enquiry_child;
    enquiry.created_at = req.body.created_at;
    enquiry.tags = req.body.tags;
    enquiry.status = req.body.status;
    enquiry.file_url = req.body.file_url;
    // save the contact and check for errors
    enquiry.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New enquiry created!',
            data: enquiry
        });
    });
};

// get review  --->get api
exports.getEnquiry = function (req, res) {
    Review.findById(req.params.enquiry_id, function (err, enquiry) {
        if (err)
            res.send(err);
        res.json({
            message: 'enquiry loading..',
            data: enquiry
        });
    });
};
// Handle update enquiry info
exports.updateEnquiry = function (req, res) {
    enquiry.findById(req.params.id, function (err, enquiry) {
        if (err)
            res.send(err);

        enquiry.status = req.body.status;
        // save the update and check for errors
        enquiry.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'enquiry Info updated',
                data: enquiry
            });
        });
    });
};


// @desc      Delete enquiry by id
// @route     DELETE /api/enquiry/:id

module.exports.deleteEnquiry = async (req, res, next) => {
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
// @route      /api/enquiry/
module.exports.deleteEnquiry = async (req, res, next) => {
    try {
        await Enquiry.deleteMany();
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({ success: false })
    }
};
