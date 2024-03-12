"use strict"
/** @type {import("sequelize-cli").Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_name: {
                type: Sequelize.STRING,
            },
            first_name: {
                type: Sequelize.STRING,
            },
            last_name: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            password_hash: {
                type: Sequelize.STRING,
            },
            email_verified_at: {
                type: Sequelize.DATE,
            },
            google_id: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                field: "created_at",
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                field: "updated_at",
            },
            deletedAt: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: null,
                field: "deleted_at",
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("users")
    },
}