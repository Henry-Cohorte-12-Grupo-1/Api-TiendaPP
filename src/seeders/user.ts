import { v4 as uuidv4 } from "uuid";

export const users = [
    {
        userId: uuidv4(),
        username: "username0",
        password: "pass",
        email: "useremail",
        firstName: "fname",
        lastName: "lname",
        roleId: 1,
    },
    {
        userId: uuidv4(),
        username: "username1",
        password: "pass",
        email: "useremail1",
        firstName: "fname",
        lastName: "lname",
        roleId: 2,
    },
    {
        userId: uuidv4(),
        username: "username2",
        password: "pass",
        email: "useremai2",
        firstName: "fname",
        lastName: "lname",
        roleId: 2,
    },
];
