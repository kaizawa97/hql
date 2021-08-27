'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      post_id: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'posts',
            key: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
        allowNull: false,
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