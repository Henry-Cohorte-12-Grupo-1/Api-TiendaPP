"use strict";

import { Model, Sequelize, UUIDV4 } from "sequelize";

interface ProductAttributes {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    description: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Product
        extends Model<ProductAttributes>
        implements ProductAttributes {
        productId!: string;
        name!: string;
        price!: number;
        quantity!: number;
        description!: string;

        static associate(models: any) {
            //associations
            Product.belongsTo(models.User, { foreignKey: "userId" });
            Product.hasMany(models.Image, { foreignKey: "productId" });
            Product.hasMany(models.Review, { foreignKey: "productId" });
            Product.belongsTo(models.Category, { foreignKey: "categoryId" });
            Product.hasMany(models.CartItem, { foreignKey: "productId" });
            Product.hasMany(models.Order, { foreignKey: "productId" })
            Product.hasMany(models.Wishlist, { foreignKey: "productId" })
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
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
