import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Bisnis = db.define ('bisnis',{
    bisnis:DataTypes.STRING,
    phonebisnis:DataTypes.STRING,
    country:DataTypes.STRING,
    province:DataTypes.STRING,
    city:DataTypes.STRING,
    address:DataTypes.STRING,
    pin:DataTypes.STRING,
    imagebisnis:DataTypes.STRING,
    urlbisnis:DataTypes.STRING

},{
    freezeTableName:true
});

export default Bisnis;

(async()=>{
    await db.sync();
})();