var express = require('express');
var router = express.Router();
const {
    createRole,
    getRole,
    updateRole,
    deleteRole


} = require('../controllers/user_role.controller');



router
    .route('/')
    .post(createRole)
    .get(getRole)


router
    .route('/:id')
    .get(getRole)
    .put(updateRole)
    .delete(deleteRole);

module.exports = router;