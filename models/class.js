const mongoose = require('mongoose');
const SubjectSchema = require('./subject');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    students: Array,
    section: String,
    subjects: [SubjectSchema],
    dateCreated:{
        type: Date,
        default: Date.now()
    },
}
);
module.exports = ClassSchema;