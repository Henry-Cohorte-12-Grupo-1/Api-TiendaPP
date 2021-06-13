import dotenv from "dotenv";

dotenv.config();

module.exports = {
    development: {
        username: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "1234",
        database: process.env.DB_NAME || "postgres",
        host: process.env.API_HOST || "localhost",
        dialect: "postgres",
    },
    test: {
        username: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "1234",
        database: process.env.DB_NAME || "postgres",
        host: process.env.API_HOST || "localhost",
        dialect: "postgres",
    },
    production: {
        username: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "1234",
        database: process.env.DB_NAME || "postgres",
        host: process.env.API_HOST || "localhost",
        dialect: "postgres",
    },
};
