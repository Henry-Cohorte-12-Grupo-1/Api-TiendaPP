import { Request, Response } from "express";
import app from "../../app";
import db from "../../models";
import { users } from "../../seeders/user";

//For testing purposes, Gets all the user DB with roles.
export function getAllUsers(req: Request, res: Response) {
    db.User.findAll({
        include: {
            model: db.Role,
        },
    })
        .then((result: object) => res.json(result))
        .catch((err: object) => console.error(err));
}

//For testing purposes, it loads users from the seeders to DB
export const createDummyUsers = () => {
    users.map(async (user) => {
        await db.User.create(user);
    });
};
