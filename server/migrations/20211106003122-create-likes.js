'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('likes', {
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
    await queryInterface.dropTable('likes');
  }
};