'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mst_alarms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      device: {
        type: Sequelize.STRING
      },
      node: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      tableId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'mst_tables',
          key: 'id',
          as: 'tableId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mst_alarms');
  }
};