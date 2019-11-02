var db = require("../models");

module.exports = function(app) {
  //Load all posts page
  app.get("/post/:id", function(req, res) {
    var postId = req.params.id;
    db.Posts.findOne({ where: { id: postId } }).then(function(dbPost) {
      res.render("viewpost", {
        post: dbPost
      });
    });
  });
};
