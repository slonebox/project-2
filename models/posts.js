module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define("Posts", {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  });

  //Associates posts under a specific account
  Posts.associate = function(models) {
    Posts.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });

    Posts.hasMany(models.Comments, {
      onDelete: "cascade"
    });
  };

  return Posts;
};
