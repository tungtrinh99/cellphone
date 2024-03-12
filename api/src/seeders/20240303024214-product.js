'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', 
      [{
        id: 1,
        product_name: 'iPhone 15 Pro Max',
        brand_name: 'apple',
        original_price: 34990000,
        discount_percent: 11,
        condition: 'New',
        description: '',
        product_image_url: 'iphone15prm.png',
        stock_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 2,
        product_name: 'iPhone 15 Pro',
        brand_name: 'apple',
        original_price: 29800000,
        discount_percent: 7,
        condition: 'New',
        description: '',
        product_image_url: 'iphone15.png',
        stock_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});
  }
};
