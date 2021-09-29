const mongoose = require('mongoose');
// var mexp = require('elasticsearch');


const UserRoleSchema = new mongoose.Schema({

    menu_id: {
        type: String,
        required: [true, 'Id is required']
    },

    role: {
        type: String,
    },
    icon: {
        type: String,
    },

    status: {
        type: String
    },
    role_permission: {
        type: Object,
        menu_id: {
            type: String,
            required: [true, 'Id is required']
        },

        status: {
            type: String
        }
    }
})


// userSigninSchema.plugin(mexp)
mongoose.model('UserRole', UserRoleSchema, "role")


