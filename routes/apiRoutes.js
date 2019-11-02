var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  //WILL'S WORK Create a new user
  app.post("/api/users", function(req, res) {
    //Logs req.body to internal console, but can't seem to access values what is says is [Object: null prototype]
    console.log(req.body);
    var newUser = {
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      website: req.body.website,
      github: req.body.github,
      linkedin: req.body.linkedin,
      imageURL: req.body.imageURL
    };

    db.Users.create(newUser).then(function(data) {
      res.json(data);
    });
  });
};
