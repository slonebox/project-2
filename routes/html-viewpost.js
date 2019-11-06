var db = require("../models");
// var sequelize = require("../models/index.js");

module.exports = function(app) {
  //Load all posts page
  app.get("/post/:id", function(req, res) {
    var postId = req.params.id;
    db.Users.findAll({}).then(function(dbUser) {
      db.Posts.findOne({
        where: { id: postId },
        include: [db.Users]
      }).then(function(dbPost) {
        db.Comments.findAll({
          where: {
            PostId: postId
          },
          include: [db.Users],
          order: db.sequelize.col("createdAt")
        }).then(function(dbComment) {
          res.render("viewpost", {
            user: dbUser,
            post: dbPost,
            comment: dbComment
          });
        });
      });
    });
  });
};
