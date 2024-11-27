import pkg from "pg";

const {Pool } = pkg
export const pool = new Pool({
     host: '192.168.37.133', 
     user:'postgres', 
     password: 'password',
     port: 5432,
     database: "bddrct"
});
pool.connect()