const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    class:{
        type: String,
    },
    teacher:{
        type: String,
    },
    assignments:{
        type: Array,
    },
    dateCreated:{
        type: Date,
        default: Date.now()
    },
}

);

const Subject = mongoose.model('subject', SubjectSchema);

module.exports = Subject;