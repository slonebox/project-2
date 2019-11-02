var db = require("../models");

module.exports = function(app) {
  //Load all posts page
  app.get("/allposts", function(req, res) {
    // var query = {
    //   UserId: db.Users.id
    // };
    // query.UserId = db.Users.id;

    // db.Users.findOne({
    //   where: {}
    // })
    db.Posts.findAll({
      // where: { UserId: db.Users.id },
      include: [db.Users]
    }).then(function(dbPost) {
      res.render("allposts", {
        post: dbPost
      });
    });
  });
};
