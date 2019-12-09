const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./routes")
const port = 3002;
const app = express();
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(router);
app.listen(port, () => `Running on port ${port}`);