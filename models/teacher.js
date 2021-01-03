const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: String,
    subjects: {
        type: Array,
    },
    classes: [{
        _id: String,
        name: String,
        section: String,  
    }]
}
);

module.exports = TeacherSchema;