'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('product_specs', 
      [{
        id: 1,
        product_id: 1,
        battery_capacity: 4422,
        memory: 512,
        ram: 8,
        screen: 'OLED, 6.7", Super Retina XDR',
        color: 'Titan xanh, Titan đen, Titan tự nhiên, Titan trắng',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 2,
        product_id: 1,
        battery_capacity: 4422,
        memory: 1024,
        ram: 8,
        screen: 'OLED, 6.7", Super Retina XDR',
        color: 'Titan xanh, Titan đen, Titan tự nhiên, Titan trắng',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('product_specs', null, {});
  }
};
