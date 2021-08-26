'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      postId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'posts',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      body: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      reply: {
        type: Sequelize.TEXT
      },
      like_count: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.BIGINT
      },
      // deletedAt: {
      //   type: Sequelize.DATE
      // },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comments');
  }
};