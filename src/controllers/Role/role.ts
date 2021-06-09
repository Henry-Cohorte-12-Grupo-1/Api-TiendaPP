import db from "../../models";
import { roles } from "../../seeders/role";

export const createRoles = () => {
    roles.map((role) => {
       db.Role.create(role);
    });
};

