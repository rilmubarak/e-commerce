'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addConstraint('Products', {
      fields: ['BannerId'],
      type: 'foreign key',
      name: 'custom_fkey_BannerId',
      references: { //Required field
        table: 'Banners',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Carts', {
      fields: ['ProductId'],
      type: 'foreign key',
      name: 'custom_fkey_ProductId',
      references: { //Required field
        table: 'Products',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Carts', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'custom_fkey_UserId',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('Products', 'custom_fkey_BannerId');
    await queryInterface.removeConstraint('Carts', 'custom_fkey_ProductId');
    await queryInterface.removeConstraint('Carts', 'custom_fkey_UserId');
  }
};
