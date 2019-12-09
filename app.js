const bodyParser = require("body-parser");
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const router = require("./routes")
const port = 3002;
const app = express();
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(router);
mongoose.connect("mongodb://localhost/cats", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", error => console.log(error));

app.listen(port, () => `Running on port ${port}`);