"use strict";
import { Model } from "sequelize";

export interface CategoryAttributes {
    categoryId: number;
    name: string;
    // description: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Category
        extends Model<CategoryAttributes>
        implements CategoryAttributes
    {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        categoryId!: number;
        name!: string;
        // description!: string;

        static associate(models: any) {
            // define association here
            Category.hasMany(models.Product, { foreignKey: "categoryId" });
        }
    }
    Category.init(
        {
            categoryId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
            // description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Category",
        }
    );
    return Category;
};
