const mongoose = require('mongoose');
const ClassSchema = require('./class');
const StudentSchema = require('./student');
const TeacherSchema = require('./teacher');
const Schema = mongoose.Schema;

const InstitutionSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    classes: {
        type: [ClassSchema],
    },
    teachers:{
        type: [TeacherSchema],
    },
    students:{
        type: [StudentSchema],
    }
}
);

const Institution = mongoose.model('institution', InstitutionSchema);

module.exports = Institution;