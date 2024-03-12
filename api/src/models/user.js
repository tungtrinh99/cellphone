'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    email_verified_at: DataTypes.DATE,
    google_id: DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
    deletedAt: 'deleted_at',
    modelName: 'Users',
    tableName: 'users',
  });
  return User;
};