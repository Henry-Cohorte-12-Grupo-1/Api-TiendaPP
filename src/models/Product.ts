"use strict";


import {Model, UUIDV4} from 'sequelize'


interface ProductAttributes{
    productId: string;
    name: string;
    sellerId: number;
    price: number;
    status: string;
    inventoryId: number;
    categoryId: number;
    image: string
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Product extends Model<ProductAttributes> implements ProductAttributes{


        productId!: string;
        name!: string;
        sellerId!: number;
        price!: number;
        status!: string;
        inventoryId!: number;
        categoryId!: number;
        image!: string;


        static associate(models:any){
            //associations
            Product.belongsTo(models.User)
        }
    }
    Product.init(
        {
            productId: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            sellerId: {
                type: DataTypes.INTEGER,
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
            inventoryId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            categoryId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image:{
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;

}