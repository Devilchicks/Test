import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Akun = db.define ('akun',{
    akun:DataTypes.STRING,
    phoneakun:DataTypes.STRING

},{
    freezeTableName:true
});

export default Akun;

(async()=>{
    await db.sync();
})();