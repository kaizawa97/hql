'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      posts.belongsTo(models.users, {
        foreignKey: 'user_id'
      });
      posts.hasMany(models.comments, {
        foreignKey: 'post_id'
      });
      posts.hasMany(models.replies, {
        foreignKey: 'post_id'
      });
      posts.hasMany(models.likes, {
        foreignKey: 'post_id'
      });
    }
  };
  posts.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    user_id: {
      type: DataTypes.BIGINT,
      references: {
        model: {
          tableName: 'users',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
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
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'posts',
    underscored: true,
  });
  return posts;
};