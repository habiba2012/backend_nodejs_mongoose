const express = require('express');
const router = express.Router();

const {
    createAppointment,
    getAppointment,
    updateAppointment,
    deleteAppointment

} = require('../controllers/doctor_appointment.controller');



router
    .route('/')
    .post(createAppointment)
    .get(getAppointment)
    .delete(deleteAppointment);

router
    .route('/:id')
    .get(getAppointment)
    .put(updateAppointment)
    .delete(deleteAppointment);



module.exports = router;
