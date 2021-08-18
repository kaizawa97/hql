'use strict';
const {
  Model, HostNotFoundError
} = require('sequelize');
const { not } = require('sequelize/types/lib/operators');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: {
          msg: 'The name cannot be empty'
        }
      }
    },
    age: {
      type: DataTypes.INTEGER.UNSIZED,
      allowNull: false,
      validate: {
        notEmpty: true,
        isInt: true,
        min: 0,
        max: 130,
        msg: 'The age must be between 0 and 130'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    auth_flag: {
       type: DataTypes.BOOLEAN,
       allowNull: false,
       defaultValue: false
    },
    company: {
       type: DataTypes.STRING,
      //  is: ["^[a-z]+$",'i']
    }
  }, {
    sequelize,
    modelName: 'Users',
    underscored: true,
  });
  return Users;
};