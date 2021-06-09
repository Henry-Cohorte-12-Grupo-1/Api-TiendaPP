"use strict";

import { Model } from "sequelize";

interface CartAttributes {
    cartId: number;
    userId: number;
    totalPrice: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Cart extends Model<CartAttributes> implements CartAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        cartId!: number;
        userId!: number;
        totalPrice!:number;

        static associate(models: any) {
            // define association here
            Cart.belongsTo(models.User, {as: 'user', foreignKey: 'cartId'})
        
        }
    }

    Cart.init(
        {
            cartId: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
            },
            userId: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            totalPrice:{
                type: DataTypes.FLOAT,
                allowNull: false,
                unique: true
            }
        },
        {
            sequelize,
            modelName: "Cart",
        }
    );
    return Cart;
};
