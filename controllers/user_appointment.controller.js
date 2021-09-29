const mongoose = require('mongoose');


//Import Appointment models 
const UserAppointment = mongoose.model('Appointment');



// Handle --->post-add review 
exports.createAppointment = function (req, res) {
    const appointment = new UserAppointment();
    appointment.user_id = req.body.user_id;
    appointment.user_appointment_child = req.body.user_appointment_child;
    appointment.created_at = req.body.created_at;
    appointment.status = req.body.status;
    // save the appointment and check for errors
    appointment.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New review created!',
            data: appointment
        });
    });
};

// get appointment  --->get api
exports.getAppointment = function (req, res) {
    Appointment.findById(req.params.user_id, function (err, appointment) {
        if (err)
            res.send(err);
        res.json({
            message: 'Review loading..',
            data: appointment
        });
    });
};

//@desc     get single appointment
// @route   api/appointment/:id
module.exports.getAppointment = async (req, res, next) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        res.status(200).json({ success: true, data: appointment })
    } catch (err) {
        res.status(400).json({ success: false })
    }
}

// Handle update appointment info
exports.updateAppointment = function (req, res) {
    appointment.findById(req.params.id, function (err, appointment) {
        if (err)
            res.send(err);

        appointment.status = req.body.status;
        // save the update and check for errors
        appointment.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'appointment Info updated',
                data: appointment
            });
        });
    });
};


// @desc      Delete appointment by id
// @route     DELETE /api/appointment/:id

module.exports.deleteAppointment = async (req, res, next) => {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    try {
        if (!appointment) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
    } catch (err) {
        res.status(400).json({ success: false })
    }

};

// @desc       delete all 
// @route      /api/appointment
module.exports.deleteAppointment = async (req, res, next) => {
    try {
        await Appointment.deleteMany();
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({ success: false })
    }
};