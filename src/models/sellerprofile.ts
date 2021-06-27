'use strict';
import { Model, UUIDV4 } from "sequelize";

interface SellerProfileAttributes {
    header: string,
    description: string
    sellerProfileId: string
}



module.exports = (sequelize: any, DataTypes: any) => {
    class SellerProfile extends Model<SellerProfileAttributes> implements SellerProfileAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        header!: string;
        description!: string;
        userId!: string;
        sellerProfileId!: string;

        static associate(models: any) {
            // define association here
            SellerProfile.belongsTo(models.User, { foreignKey: 'userId' })
            SellerProfile.hasMany(models.SellerProfileImage, { foreignKey: 'sellerProfileId' })

        }
    };
    SellerProfile.init({
        sellerProfileId: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        header: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'SellerProfile',
    });
    return SellerProfile;
};