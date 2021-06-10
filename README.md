# TiendaPP-Api

DISCLAIMER!

*) Modelos agregados (cart, cartitem, category, image, index, product, role, user)

Comando ejemplo para agregado de modelo:

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

ver docu: https://sequelize.org/master/manual/migrations.html
*)'seeders' => Input ficticio para testing de DB (category, image, product, role, user)

Ruta para carga en DB de datos ficticios (

-http://localhost:3001/dummydata/load)

Rutas para visualización de Users y Products

-http://localhost:3001/product/getallproducts,

-http://localhost:3001/user/getallusers)
