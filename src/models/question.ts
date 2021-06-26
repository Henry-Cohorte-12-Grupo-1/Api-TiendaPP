"use strict";
import { Model, Sequelize, UUIDV4 } from 'sequelize'

interface QuestionAttributes {
    questionId: string;
    question: string;
    answer: string
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Question
        extends Model<QuestionAttributes> implements QuestionAttributes{
            questionId!: string;
            question!: string;
            answer!: string;

            static associate(models: any) {
                // define association here
                Question.belongsTo(models.User, { foreignKey: "userId" })
                Question.belongsTo(models.Product, { foreignKey: "productId" });
            }
    }
    Question.init(
        {
            questionId: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                primaryKey: true,
                allowNull: false,
                unique: true,           
            },
            question: DataTypes.TEXT,
            answer: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Question",
        }
    );
    return Question;
}
