const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
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
    classes: {
        type: Array,
    },
    institutions: {
        type: Array,

    },
    emailVerified:{
        type: Boolean,
        default: false
    }
});

const Teacher = mongoose.model('teacher', TeacherSchema);

module.exports = Teacher;