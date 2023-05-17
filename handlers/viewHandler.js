const Sport = require("../pkg/sportovi/sportSchema");

exports.sportView = async (req, res) => {
  try {
    const sportovi = await Sport.find();

    res.status(200).render("sport", {
      status: "success",
      naslov: "Sport",
        });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error with this page");
  }
};

exports.createSport = async (req, res) => {
  try {
    console.log(req.body);

    await Avtomobil.create(req.body);
    res.redirect("/oglas");
  } catch (err) {
    res.status(500).send("Error");
  }
};

exports.getLoginForm = (req, res) => {
  try {
    res.status(200).render("login", {
      title: "Login",
    });
  } catch (err) {
    res.status(500).send("Error");
  }
};