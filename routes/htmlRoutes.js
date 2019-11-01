var db = require("../models");

module.exports = function(app) {
  // Load index page: only includes links to the different features, does not directly display data
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load page for creating a new user, also does not directly display data  
  app.get("/newUser", function(req, res) {
    res.render("newUser");
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });


  // Load page for viewing all users
  app.get("/users", function(req, res) {
    db.User.findAll().then(function(dbUser){
      res.render("allUsers", {
        user: dbUser
      });
    });
  });

  // Load page for viewing a user's original post and sending comments 
  app.get("/users/:id", function(req, res) {
    db.User.findOne({where: 
      { id: req.params.id }, 
      include: [db.Comment] 
    }).then(function(dbUser) {
      res.render("single-user", { post: dbUser})
    })
  })


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
