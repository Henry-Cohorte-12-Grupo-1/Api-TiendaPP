import db from "../../models";
import { roles } from "../../seeders/role";

const createRoles = () => {
    roles.map((role) => {
        db.Role.create(role);
    });
};
