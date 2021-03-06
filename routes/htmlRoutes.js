var db = require("../models");

module.exports = function(app) {
  // Root Route
  require("./html-root")(app);

  //Load signup page
  require("./html-signup")(app);

  // Load all posts page
  require("./html-allposts")(app);

  // Load individual post page
  require("./html-viewpost")(app);

  //Load create post page
  require("./html-createpost")(app);

  // // Load individual user page
  // require("./html-viewuser")(app);

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
