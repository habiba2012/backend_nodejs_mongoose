const mongoose = require('mongoose');
const asyncHandler = require('../middleWare/async');

const Enquiry = mongoose.model('Enquiry');



// Handle --->post-add enquiry 
exports.createEnquiry =
    async (req, res) => {
        const enquiry = new Enquiry();
        enquiry.user_id = req.body.user_id;
        enquiry.user_enquiry_child = req.body.user_enquiry_child;
        enquiry.enquiry_id = req.body.enquiry_id;
        enquiry.enquiry = req.body.enquiry;
        enquiry.created_at = req.body.created_at;
        enquiry.remark = req.body.remark;
        enquiry.status = req.body.status;
        enquiry.file_url = req.body.file_url;
        // save the enquiry data and check for errors
        enquiry.save(function (err) {
            // if (err)
            //     res.json(err);
            res.json({
                message: 'New review created!',
                data: enquiry
            });
        });
    };

//@desc get   all enquiry
// @ route   api/user/enquiry
module.exports.getEnquiry = async (req, res, next) => {
    try {
        const enquiry = await Enquiry.find();

        res.status(200).json({ success: true, count: enquiry.length, data: enquiry });
    } catch (err) {
        res.status(400).json({ success: false })
    }
}

//@desc     get single enquiry
// @route   api/user/enquiry/:id
module.exports.getEnquiry = async (req, res, next) => {
    try {
        const enquiry = await User.findById(req.params.id);
        res.status(200).json({ success: true, data: enquiry })
    } catch (err) {
        res.status(400).json({ success: false })
    }
}



// @desc      Update enquiry
// @route     PUT /api/enquiry/:id

module.exports.updateEnquiry = async (req, res, next) => {
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json({
        success: true,
        data: enquiry
    });
};

// @desc      Delete enquiry by id
// @route     DELETE /api/enquiry/:id

module.exports.deleteEnquiry = async (req, res, next) => {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    try {
        if (!enquiry) {
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