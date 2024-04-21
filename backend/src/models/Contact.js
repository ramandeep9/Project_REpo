require('dotenv').config();
const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const createContactTable = () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS contact (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      mobile VARCHAR(15) NOT NULL,
      application VARCHAR(30) NOT NULL,
      query VARCHAR(255) NOT NULL
    )
  `;
  pool.query(createTableQuery, (error, results) => {
    if (error) {
      console.error('Error creating contact table:', error);
    } else {
      console.log('Contact table created or already exists');
    }
  });
};

const saveContact = (name, email, mobile, application, query, callback) => {
  const insertQuery = 'INSERT INTO contact SET ?';
  const contact = { name, email, mobile, application, query };
  pool.query(insertQuery, contact, (error, results) => {
    if (error) {
      console.error('Error saving contact:', error);
      callback(error, null);
    } else {
      console.log('Contact saved successfully');
      callback(null, results);
    }
  });
};

module.exports = {
  createContactTable,
  saveContact
};

