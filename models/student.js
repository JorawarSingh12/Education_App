const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    class: {
        type: String,
    }
});

module.exports = StudentSchema;