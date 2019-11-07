var db = require("../models");

module.exports = function(app) {
  //Load all posts page
  app.get("/allposts", function(req, res) {
    db.Posts.findAll({
      include: [db.Users],
      order: db.sequelize.col("createdAt", "DESC")
    }).then(function(dbPost) {
      console.log(dbPost);
      res.render("allposts", {
        post: dbPost
      });
    });
  });
};
