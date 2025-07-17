import dotenv from 'dotenv';
const mysql = require('mysql')
dotenv.config();

const pool = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.connect(function(err: any) {
    if (err) {
        throw err;
    }
    console.log('mysqldbconnected')
});
  export default pool