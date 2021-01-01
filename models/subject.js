const mongoose = require('mongoose');
const AssignmentSchema = require('./assignment');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    assignments:{
        type: [AssignmentSchema],
    },
    dateCreated:{
        type: Date,
        default: Date.now()
    },
}

);

module.exports = SubjectSchema;