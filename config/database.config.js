import mariadb  from 'mariadb';
export const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: '',
     port: 3306,
     database: "bddrct",
     connectionLimit: 5
});
pool.getConnection()