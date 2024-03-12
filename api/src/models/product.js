'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.ProductSpecs, { as : "specs" })
    }
  }
  Product.init({
    product_name: DataTypes.STRING,
    brand_name: DataTypes.STRING,
    original_price: DataTypes.FLOAT,
    discount_percent: DataTypes.FLOAT,
    condition: DataTypes.STRING,
    description: DataTypes.TEXT,
    product_image_url: DataTypes.STRING,
    stock_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    deletedAt: 'deleted_at',
    tableName: 'products',
    modelName: 'Products',
  });

  return Product;
};