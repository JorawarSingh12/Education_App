const mongoose = require('mongoose');
const AssignmentSchema = require('./assignment');
const TestSchema = require('./test');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    teacher: String,
    assignments:{
        type: [AssignmentSchema],
    },
    tests:{
        type: [TestSchema]
    },
    dateCreated:{
        type: Date,
        default: Date.now()
    },
    
}

);

module.exports = SubjectSchema;