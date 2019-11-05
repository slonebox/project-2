var db = require("../models");

module.exports = function(app) {
  app.post("/api/comments", function(req, res) {
    console.log(req.body);
    var newComment = {
      content: req.body.content,
      PostId: req.body.postId,
      UserId: req.body.userId
    };

    db.Comments.create(newComment).then(function(data) {
      res.json({ id: data.insertId });
    });
  });
};
