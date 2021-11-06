'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.posts, {
        foreignKey: 'user_id'
      });
      users.hasMany(models.comments, {
        foreignKey: 'user_id'
      });
      users.hasMany(models.replies, {
        foreignKey: 'user_id'
      });
      users.hasMany(models.likes, {
        foreignKey: 'user_id'
      });
    }
  };
  users.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: {
          msg: "The name cannot be empty",
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isInt: true,
        min: 0,
        max: 130,
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        is: ["^\d{9,10}$",'i']
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    company: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z]+$",'i']
      }
    },
    icon_image: {
      allowNull: true,
      type: DataTypes.STRING
    },
    header_image: {
      allowNull: true,
      type: DataTypes.STRING
    },
    verified_status: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'users',
    underscored: true,
  });
  return users;
};