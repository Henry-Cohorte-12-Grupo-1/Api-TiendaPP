"use strict";
import { Model } from 'sequelize'

interface OrderAttributes {
    quantity: number;
    status: string;
    productId: string
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Order extends Model<OrderAttributes> implements OrderAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        quantity!: number;
        status!: string;
        productId!: string;

        static associate(models: any) {
            // define association here
            Order.belongsTo(models.Product, { foreignKey: "productId" });
            Order.belongsTo(models.User, { foreignKey: "userId" })
        }
    }
    Order.init(
        {
            quantity: DataTypes.INTEGER,
            status: DataTypes.STRING,
            productId: DataTypes.UUID
        },
        {
            sequelize,
            modelName: "Order",
        }
    );
    return Order;
};
