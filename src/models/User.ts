import {
    Model,
    Column,
    Table,
    CreatedAt,
    UpdatedAt,
    AllowNull,
} from "sequelize-typescript";
@Table
export class User extends Model<User> {
    @Column
    username!: string;

    @Column
    password!: string;

    @Column
    firstName!: string;

    @Column
    lastName!: string;

    @AllowNull(true)
    @Column
    phoneNum!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}
