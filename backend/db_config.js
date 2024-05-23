import mysql from "mysql2";


const db = await mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "myapp_db"
});

console.log("MySQL Connected...");

export default db;