const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    students: {
        type: Array,
    },
    section:{
        type: String,
    },
    institution:{
        type: String,
    },
    dateCreated:{
        type: Date,
        default: Date.now()
    },
}
);

const Class = mongoose.model('class', ClassSchema);

module.exports = Class;