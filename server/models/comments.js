'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comments.belongsTo(models.users, {
        foreignKey: 'user_id'
      });
      comments.belongsTo(models.posts, {
        foreignKey: 'post_id'
      });
      comments.hasMany(models.replies, {
        foreignKey: 'comments_id'
      });
      comments.hasMany(models.likes, {
        foreignKey: 'comments_id'
      });
    }
  };
  comments.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'cascode',
      onDelete: 'cascade'
    },
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'posts',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING
    },
    movie: {
      allowNull: true,
      type: DataTypes.STRING
    },
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'comments',
    underscored: true,
  });
  return comments;
};