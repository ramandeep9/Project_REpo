const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_tredul',
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