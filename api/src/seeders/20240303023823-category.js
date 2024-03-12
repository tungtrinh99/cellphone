'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories',
      [{
        id: 1,
        category_name: 'Điện thoại',
        description: '',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 2,
        category_name: 'Laptop',
        description: '',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 3,
        category_name: 'Tablet',
        description: '',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      }
      ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
