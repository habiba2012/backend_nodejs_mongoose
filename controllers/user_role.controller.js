const mongoose = require('mongoose');


//Import role models 
const Role = mongoose.model('UserRole');



// Handle --->post-add role 
exports.createRole = function (req, res) {
    const role = new Role();
    role.menu_id = req.body.menu_id;
    role.role = req.body.role;
    role.icon = req.body.icon;
    role.role_permission = req.body.role_permission;
    role.menu_id = req.body.menu_id;
    role.status = req.body.status;
    // save the role and check for errors
    role.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New role created!',
            data: role
        });
    });
};

//@desc get   all role
// @ route   api/user/role
module.exports.getRole = async (req, res, next) => {
    try {
        const roles = await Role.find();

        res.status(200).json({ success: true, count: users.length, data: roles });
    } catch (err) {
        res.status(400).json({ success: false })
    }
}

// @desc      Update role
// @route     PUT /api/role/:id

module.exports.updateRole = async (req, res, next) => {
    const roles = await Role.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json({
        success: true,
        data: roles
    });
};

// @desc      Delete user by id
// @route     DELETE /api/role/:id
module.exports.deleteRole = async (req, res, next) => {
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
// @route      /api/role
module.exports.deleteRole = async (req, res, next) => {
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