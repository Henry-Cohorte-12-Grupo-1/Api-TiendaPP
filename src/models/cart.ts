'use strict';

import { Model } from 'sequelize';

interface CartAttributes {
    totalPrice: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Cart extends Model<CartAttributes> implements CartAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        totalPrice!: number;

        static associate(models: any) {
            // define association here
            Cart.belongsTo(models.User, { foreignKey: 'userId' });
        }
    }

    Cart.init(
        {
            totalPrice: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Cart',
        },
    );
    return Cart;
};
