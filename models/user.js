const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    email:{
        type: String,
        required: [true, 'Email field is required'],
   
    },
    password:{
        type: String,
        required: true,
     
    },
    emailVerified:{
        type: Boolean,
        default: false,
    },
    type:{
        type: String,   
    },
    institution:{
     type: String,   
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;