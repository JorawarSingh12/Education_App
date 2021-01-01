const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: String,
    subjects: {
        type: Array,
    },
}
);

module.exports = TeacherSchema;