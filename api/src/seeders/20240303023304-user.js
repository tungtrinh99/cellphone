'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      id: 1,
      user_name: 'TungTrinh',
      first_name: 'Trinh',
      last_name: 'Tung',
      email: 'tungtrinh@gmail.com',
      address: '123 Main St',
      password_hash: '$2a$12$.SPGhcrIdfqwzIWUpgn.1uBxg6i3Ah7Ulk9OEKK9oCzAvEioPIVxe', // 123456
      email_verified_at: null,
      google_id: null,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
