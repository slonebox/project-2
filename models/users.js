module.exports = function(sequelize, DataTypes) {
  //Defines Accounts table
  var Users = sequelize.define("Users", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    website: DataTypes.TEXT,
    github: DataTypes.TEXT,
    linkedin: DataTypes.TEXT,
    imageURL: DataTypes.TEXT
  });

  //Associates accounts with posts and replies
  Users.associate = function(models) {
    Users.hasMany(models.Posts, {
      onDelete: "cascade"
    });
    Users.hasMany(models.Comments, {
      onDelete: "cascade"
    });
  };

  return Users;
};
