const mongoose = require("mongoose");
const CatSchema = require("../schemas/cat_schema");

const CatModel = mongoose.model("cat", CatSchema);

module.exports = CatModel;