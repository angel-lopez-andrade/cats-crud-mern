const express = require("express");
const router = express.Router();
const CatController = require("./controllers/cat_controller");

router.get("/cats", (req, res) => {
    res.render("cats/index");
});

router.get("/cats/new", (req, res) => {
    res.render("cats/new");
})

router.post("/cats", (req, res) => {
    res.redirect("/cats");
})

module.exports = router;