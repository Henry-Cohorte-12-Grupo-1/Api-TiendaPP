import db from "../../models";
import { roles } from "../../seeders/role";

export const createRoles = () => {
    roles.map(async (role) => {
        await db.Role.create(role);
    });
};
