const mongoose = require('mongoose');

//Import Medicine models 
const Medicine = require('../models/medicine_vendor.model')



// Handle --->post-add Medicine 
exports.createMedicine = function (req, res) {
    const medicine = new Medicine();
    medicine.user_id = request.body.user_id;
    medicine.user_order = request.body.user_order;
    medicine.order_id = request.body.order_id;
    medicine.created_at = req.body.created_at;
     medicine.status = req.body.status;
    medicine.file_url = req.body.file_url;
    // save the Medicine and check for errors
    medicine.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New Medicine created!',
            data: medicine
        });
    });
};

// get review  --->get api
exports.getMedicine = function (req, res) {
    Medicine.findById(req.params.enquiry_id, function (err, medicine) {
        if (err)
            res.send(err);
        res.json({
            message: 'enquiry loading..',
            data:  medicine
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
