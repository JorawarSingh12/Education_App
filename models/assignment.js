const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    studentsSubmitted: {
        type: Array,
    },
    dateCreated:{
        type: Date,
        default: Date.now()
    },
    dateEnded:{
        type: Date,
    }
}
);
module.exports = AssignmentSchema;