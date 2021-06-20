'use strict';

import { Model, UUIDV4 } from 'sequelize';

// import {Role}  from './roles'

// These are all the attributes in the User model
interface UserAttributes {
    userId: string;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    role: number;
    code:string;
    forcePassword:boolean;
    googleId: string;
    gitHubId: string
}

module.exports = (sequelize: any, DataTypes: any) => {
    class User extends Model<UserAttributes> implements UserAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        userId!: string;
        username!: string;
        password!: string;
        email!: string;
        firstName!: string;
        lastName!: string;
        role!:number;
        code!:string;
        forcePassword!:boolean;
        googleId!: string;
        gitHubId!: string

        static associate(models: any) {
            // define association here

            User.belongsTo(models.Role, { foreignKey: 'roleId' });
            User.hasMany(models.Product, { foreignKey: 'userId' });
            User.hasOne(models.Cart, { foreignKey: 'userId' });
            User.hasMany(models.CartItem, { foreignKey: 'userId' });

        }
    }
    User.init(
        {
            userId: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            code: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            forcePassword: {
                type: DataTypes.BOOLEAN,
                defaultValue:false,
                allowNull: false,
            },
            googleId: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            gitHubId: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'User',
        },
    );
    return User;
};
