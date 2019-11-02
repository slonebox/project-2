// var db = require("../models");

module.exports = function(app) {
  //Load signup page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });
};
