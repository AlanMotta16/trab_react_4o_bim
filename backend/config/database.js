import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db','root','mysqluser',{
    host:"localhost",
    dialect: "mysql"
});

export default db;