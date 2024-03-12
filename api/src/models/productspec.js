'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductSpec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductSpec.belongsTo(models.Products)
    }
  }
  ProductSpec.init({
    product_id: DataTypes.INTEGER,
    battery_capacity: DataTypes.INTEGER,
    memory: DataTypes.INTEGER,
    ram: DataTypes.INTEGER,
    screen: DataTypes.STRING,
    color: DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
    deletedAt: 'deleted_at',
    tableName: 'product_specs',
    modelName: 'ProductSpecs',
  });

  return ProductSpec;
};