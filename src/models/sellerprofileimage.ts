"use strict";
import { Model } from 'sequelize'

interface SellerProfileImageAttributes {
    url: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class SellerProfileImage extends Model<SellerProfileImageAttributes> implements SellerProfileImageAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

        url!: string

        static associate(models: any) {
            // define association here
            SellerProfileImage.belongsTo(models.SellerProfile, { foreignKey: "sellerProfileId" });

        }
    }
    SellerProfileImage.init(
        {
            url: DataTypes.STRING
        },
        {
            sequelize,
            modelName: "SellerProfileImage",
        }
    );
    return SellerProfileImage;
};