var db = require("../models");

module.exports = function(app) {
  app.get("/createpost", function(req, res) {
    db.Users.findAll({}).then(function(dbUser) {
      res.render("createpost", {
        user: dbUser
      });
    });
  });
};
