import db from "./src/models";
import app from "./src/app";
import {createDummyUsers} from './src/controllers/User/user'
import {createRoles} from './src/controllers/Role/role'

const port = process.env.API_PORT || 3001;

db.sequelize
    //.sync({ force: true, logging: false })
    .sync({ force: false })
    .then(() => {
        console.log("base de datos conectada");
        
        createDummyUsers()
        createRoles()
        
        
        app.listen(port, () => {
            console.log(`El server esta corriendo en el puerto ${port}`);
        });
    })
    .catch((error: any) => console.error(error));
