const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

console.log('Database connected');

app.get('/', (req=Request, res=Response) => {
    res.json({ status: 'Database Api Connection!' });
  });
  const getConnection = async () => {
    return await pool.getConnection();
  };
  module.exports = {
    getConnection
  };