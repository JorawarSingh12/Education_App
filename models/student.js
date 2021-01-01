const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const StudentSchema = new Schema({
    name: String,
    classes: {
        type: Array,
    }
});

module.exports = StudentSchema;