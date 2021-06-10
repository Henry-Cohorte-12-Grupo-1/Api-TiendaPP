"use strict";
const { Model } = require("sequelize");

interface ImageAttributes {
    imageId: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Image extends Model<ImageAttributes> implements ImageAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        imageId!: string;

        static associate(models: any) {
            // define association here
            Image.belongsTo(models.Product, { foreignKey: "productId" });
        }
    }
    Image.init(
        {
            imageId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Image",
        }
    );
    return Image;
};
