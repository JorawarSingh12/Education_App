const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const StudentSchema = new Schema({
    _id:{
        type: String,
    },
    classes: {
        type: Array,
    },
    institution:{
        type: String,
    },
}
);

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;