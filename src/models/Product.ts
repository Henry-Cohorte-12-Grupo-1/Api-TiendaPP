"use strict";

import { Model, UUIDV4 } from "sequelize";

interface ProductAttributes {
    productId: string;
    name: string;
    price: number;
    status: string;
    quantity: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Product
        extends Model<ProductAttributes>
        implements ProductAttributes
    {
        productId!: string;
        name!: string;
        price!: number;
        status!: string;
        quantity!: number;

        static associate(models: any) {
            //associations
            Product.belongsTo(models.User, {
                foreignKey: "userId",
                as: "sellerId",
            });
            Product.hasMany(models.Image)
            Product.belongsTo(models.Category)
        }
    }
    Product.init(
        {
            productId: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
