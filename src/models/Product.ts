import {
    Model,
    Column,
    Table,
    CreatedAt,
    UpdatedAt
} from "sequelize-typescript";
@Table
export class Product extends Model<Product> {
    @Column
    name!: string;

    @Column
    sellerId!: number;

    @Column
    price!: number;

    @Column
    status!: number;

    @Column
    inventoryId!: number;

    @Column
    categoryId!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    


}
