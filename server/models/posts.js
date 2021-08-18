'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Posts.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        msg: 'The title cannot be empty'
      }
    },
    body: { 
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        msg: 'The body cannot be empty'
      }
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true, 
      validate: {
        isUrl: true,
        msg: 'The photo url is valid'
      }
    },
    movie: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
        msg: 'The movie url is valid'
      }
    },
    like_count: { 
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Posts',
    underscored: true,
  });
  return Posts;
};