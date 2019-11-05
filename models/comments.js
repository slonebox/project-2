module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("Comments", {
    content: DataTypes.TEXT
  });

  //Associates replies under a specific account
  Comments.associate = function(models) {
    Comments.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
    Comments.belongsTo(models.Posts, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  //Associates replies under a specific post

  return Comments;
};
