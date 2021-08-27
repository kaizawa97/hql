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
      comments.belongsTo(models.posts, {
        foreignKey: 'postId'
      });
    }
  };
  comments.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
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
    reply: DataTypes.TEXT,
    like_count: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    }
    // deletedAt: {
    //   type: DataTypes.DATE,
    //   allowNull: true
    // },
  }, {
    sequelize,
    modelName: 'comments',
    underscored: true,
  });
  return comments;
};