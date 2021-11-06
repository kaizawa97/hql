'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class replies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      replies.belongsTo(models.users, {
        foreignKey: 'user_id'
      });
      replies.belongsTo(models.posts, {
        foreignKey: 'post_id'
      });
      replies.belongsTo(models.comments, {
        foreignKey: 'comments_id'
      });
      replies.hasMany(models.likes, {
        foreignKey: 'replies_id'
      });
    }
  };
  replies.init({
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
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
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
      type: DataTypes.BIGINT,
      allowNull: false,
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
      type: DataTypes.BIGINT,
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
    modelName: 'replies',
    underscored: true,
  });
  return replies;
};