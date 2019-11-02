var db = require("../models");

module.exports = function(app) {
  //Load all posts page
  app.get("/allposts", function(req, res) {
    db.Post.findAll().then(function(dbPost) {
      res.render("allposts", {
        post: dbPost
      });
    });
  });
};
