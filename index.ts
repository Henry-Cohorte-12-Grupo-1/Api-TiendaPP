import db from "./src/models";
import app from "./src/app";

const port = process.env.API_PORT || 3001;

db.sequelize
    //.sync({ force: true, logging: false })
    .sync({ force: true })
    .then(() => {
        console.log("base de datos conectada");
        app.listen(port, () => {
            console.log(`El server esta corriendo en el puerto ${port}`);
        });
    })
    .catch((error: any) => console.error(error));
