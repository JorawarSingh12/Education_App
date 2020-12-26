const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstitutionSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    email:{
        type: String,
        required: [true, 'Email field is required'],
    },
    password:{
        type: String,
        required: true,
        min:6,
        max:255
    },
    classes: {
        type: Array,
    },
    emailVerified:{
        type: Boolean,
        default: false
    }
});

const Institution = mongoose.model('institution', InstitutionSchema);

module.exports = Institution;