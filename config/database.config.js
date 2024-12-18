import pkg from "pg";
import dotenv from "dotenv"


dotenv.config()


console.log("xvgbch"+ process.env.DB_HOST)
const {Pool } = pkg
export const pool = new Pool({
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME,
     port: process.env.DB_PORT,
});
pool.connect()