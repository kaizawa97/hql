'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      likes.belongsTo(models.users, {
        foreignKey: 'user_id'
      });
      likes.belongsTo(models.posts, {
        foreignKey: 'likes_id'
      });
      likes.belongsTo(models.comments, {
        foreignKey: 'comments_id'
      });
      likes.belongsTo(models.replies, {
        foreignKey: 'replies_id'
      });
    }
  };
  likes.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT
    },
    user_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    post_id: {
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model: {
          tableName: 'posts',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    },
    comments_id: {
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model: {
          tableName: 'comments',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    },
    replies_id: {
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model: {
          tableName: 'replies',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'likes',
    underscored: true,
  });
  return likes;
};