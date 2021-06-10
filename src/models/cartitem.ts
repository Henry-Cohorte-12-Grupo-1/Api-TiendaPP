"use strict";
import { Model } from "sequelize";

interface CartItemAttributes {
    quantity: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class CartItem
        extends Model<CartItemAttributes>
        implements CartItemAttributes
    {
        quantity!: number;

        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models: any) {
            // define association here
            CartItem.belongsTo(models.Cart, { foreignKey: "cartId" });
            CartItem.belongsTo(models.Product, { foreignKey: "productId" });
        }
    }
    CartItem.init(
        {
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "CartItem",
        }
    );
    return CartItem;
};
