const index = (req, res) => {
    CatModel.find()
    .then(data => {
        return res.render("cats/index", { data });
    })
    .catch(err => {
        return res.status(500).send(`Error: ${err}`);
    });
}

const newCat = (req, res) => {
    return res.render("cats/new");
}

const createCat = (req, res) => {
    let { name, breed, age } = req.body;
    CatModel.create({
        name,
        breed,
        age
    })
    .then(() => {
        return res.redirect("/cats");
    })
    .catch((err) => {
        console.log(err);
    });
}

module.exports = {
    index,
    newCat,
    createCat
}