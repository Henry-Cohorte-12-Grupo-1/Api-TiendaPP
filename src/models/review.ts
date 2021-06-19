"use strict";
import { Model } from 'sequelize'

interface ReviewAttributes {
    score: number;
    review: string;
    userId: string
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Review extends Model<ReviewAttributes> implements ReviewAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        score!: number;
        review!: string;
        userId!: string

        static associate(models: any) {
            // define association here
            Review.belongsTo(models.Product, { foreignKey: "productId" });
        }
    }
    Review.init(
        {
            score: DataTypes.INTEGER,
            review: DataTypes.TEXT,
            userId: DataTypes.UUID
        },
        {
            sequelize,
            modelName: "Review",
        }
    );
    return Review;
};
