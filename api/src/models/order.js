'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasMany(models.OrderDetails)
    }
  }
  Order.init({
    user_id: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    total_amount: DataTypes.FLOAT,
    order_status: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    deletedAt: 'deleted_at',
    modelName: 'Orders',
    tableName: 'orders',
  });
  return Order;
};