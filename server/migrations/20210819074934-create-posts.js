'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      user_id: {
        type: Sequelize.BIGINT,
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
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      body: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      movie: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('posts');
  }
};