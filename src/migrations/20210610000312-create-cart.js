'use strict';

import { DataTypes, Model, UUIDV4 } from 'sequelize';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Carts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            cartId: {
                type: Sequelize.NUMBER,
            },
            userId: {
                type: DataTypes.STRING,
            },
            totalPrice: {
                type: Sequelize.NUMBER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Carts');
    },
};
