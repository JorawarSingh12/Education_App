const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
        min:6,
        max:255
    },
    email:{
        type: String,
        required: [true, 'Email field is required'],
        min:6,
        max:255
    },
    password:{
        type: String,
        required: true,
        min:6,
        max:255
    },
    class: {
        type: String,
    },
    institution: {
        type: String,
    },
    type:{}
});

const User = mongoose.model('user', UserSchema);

module.exports = User;