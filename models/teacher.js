const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    _id:{
        type: String,
    },
    subjects: {
        type: Array,
    },
    institution:{
        type: String,
    },
}
);

const Teacher = mongoose.model('teacher', TeacherSchema);

module.exports = Teacher;