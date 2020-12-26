const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstitutionSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
        min:6,
        max:255
    },
    email:{
        type: String,
        required: [true, 'Email field is required'],
        min:6,
        max:255
    },
    password:{
        type: String,
        required: true,
        min:6,
        max:255
    },
    class: {
        type: String
    },
    institution: {
        type: String
    }
});

const Institution = mongoose.model('institution', InstitutionSchema);

module.exports = Institution;