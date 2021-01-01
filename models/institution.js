const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstitutionSchema = new Schema({
    _id:{
        type: String,
    },
    classes: {
        type: Array,
    },
    teachers:{
        type: Array,
    },
    students:{
        type: Array,
    }
}
);

const Institution = mongoose.model('institution', InstitutionSchema);

module.exports = Institution;