const express = require('express');
const router = express.Router();


const ctrlUser = require('../controllers/user.controller');
const ctrlUserSignin = require('../controllers/userSignup.controller');

const jwtHelper = require('../config/jwtHelper');

// router.post('/enroll', function (req, res) { ctrlUser.enroll });
router.post('/enroll', ctrlUser.enroll);

// router.post('/signin', function (req, res) { ctrlUserSignin });
router.put('/profile_update', function () { ctrlUser.profileupdate });
router.get('/profile', function () { ctrlUser.profile });

router.post('/user_review/create', function (req, res) { ctrlUser.createReview });
router.get('/user_review/fetch', function () { ctrlUser.getReview });
router.put('/user_review/flag', function () { ctrlUser.reviewFlag });

router.post('/user_enquiry/create', function () { ctrlUser.enquiryCreate });
router.get('/user_enquiry/fetch', function () { ctrlUser.enquiryFetch });
router.put('/user_enquiry/update', function () { ctrlUser.enquiryUpdate });

router.post('/user_appointment/create', function () { ctrlUser.appointmentCreate });
router.get('/user_appointment/fetch', function () { ctrlUser.appointmentFetch });
router.put('/user_appointment/update', function () { ctrlUser.appointmentUpdate });


router.post('/user_role/create', function () { ctrlUser.roleCreate });
router.get('/user_role/fetch', function () { ctrlUser.roleFetch });
router.put('/user_role/update', function () { ctrlUser.roleUpdate });
router.delete('/user_role/delete', function () { ctrlUser.roleDelete });

router.post('/user_role/create_menu_permission', function () { ctrlUser.createMenuPermission });
router.get('/user_role/fetch_menu_permission', function () { ctrlUser.getMenuPermission });
router.put('/user_role/update_menu_permission', function () { ctrlUser.updateMenuPermission });
router.delete('/user_role/delete_menu_permission', function () { ctrlUser.deleteMenuPermission })


/*router.post('/enroll', ctrlUser.enroll);
// router.post('/createUser', ctrlUser.createUser);
router.post('/signin', ctrlUser.signin);
router.put('/profile_update', ctrlUser.profileUpdate);
router.get('/profile', ctrlUser.profile);
router.post('/user_review/create', ctrlUser.reviewCreate);
router.get('/user_review/fetch', ctrlUser.reviewFetch);
router.put('/user_review/flag', ctrlUser.reviewFlag);
router.post('/user_enquiry/create', ctrlUser.enquiryCreate);
router.get('/user_enquiry/fetch', ctrlUser.enquiryFetch);
router.put('/user_enquiry/update', ctrlUser.enquiryUpdate);
router.post('/user_appointment/create', ctrlUser.appointmentCreate);
router.get('/user_appointment/fetch', ctrlUser.appointmentFetch);
router.put('/user_appointment/update', ctrlUser.appointmentUpdate);

router.post('/user_role/create', ctrlUser.roleCreate);
router.get('/user_role/fetch', ctrlUser.roleFetch);
router.put('/user_role/update', ctrlUser.roleUpdate);
router.delete('/user_role/delete', ctrlUser.roleDelete);

router.post('/user_role/create_menu_permission', ctrlUser.createMenuPermission);
router.get('/user_role/fetch_menu_permission', ctrlUser.getMenuPermission);
router.put('/user_role/update_menu_permission', ctrlUser.updateMenuPermission);
router.delete('/user_role/delete_menu_permission', ctrlUser.deleteMenuPermission);
// router.post('/authenticate', ctrlUser.authenticate);
// router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);
*/
module.exports = router;
