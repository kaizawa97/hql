'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Comments.init({
    body: DataTypes.TEXT,
    reply: DataTypes.TEXT,
    like_count: {
      allowNull: false,
      defaultValue: 0,
      type: Sequelize.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Comments',
    underscored: true,
  });
  return Comments;
};