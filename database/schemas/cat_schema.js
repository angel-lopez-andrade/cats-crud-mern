const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CatSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: false
    },
    age: {
        type: Integer,
        required: false
    }
});

module.exports = CatSchema;