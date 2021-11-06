'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('preusers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      urltoken: {
        allowNull: false,
        type: Sequelize.STRING
      },
      token_flag: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      auth_flag: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('preusers');
  }
};