import db from "../../models";
import { roles } from "../../seeders/role";

export const createRoles = () => {
  try {
    roles.map(async (role) => {
      await db.Role.create(role);
    });
  } catch (error: any) {
    console.log("caught", error.message);
  }
};
