const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    marks: {
        type: Array,
    },
    timeCreated:{
        type: Date,
    },
    dateEnded:{
        type: Date,
    }
}
);
module.exports = AssignmentSchema;