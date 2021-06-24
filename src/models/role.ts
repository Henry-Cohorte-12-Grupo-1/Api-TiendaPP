"use strict";

import { Model } from "sequelize";

interface RoleAttributes {
    roleId: number;
    title: string; //admin/user
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Role extends Model<RoleAttributes> implements RoleAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        roleId!: number;
        title!: string;

        static associate(models: any) {
            // define association here

            // 'hasMany' afecta models.User

            // Role.hasMany(models.User, { foreignKey: "roleId" });
        }
    }

    Role.init(
        {
            roleId: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        },
        {
            sequelize,
            modelName: "Role",
        }
    );
    return Role;
};
