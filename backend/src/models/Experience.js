require('dotenv').config();
const mysql = require('mysql');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const createExperiencesTable = () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS experiences (
      id INT AUTO_INCREMENT PRIMARY KEY,
      type VARCHAR(10) NOT NULL,
      content TEXT NOT NULL
    )
  `;
  pool.query(createTableQuery, (error, results) => {
    if (error) {
      console.error('Error creating experiences table:', error);
    } else {
      console.log('Experiences table already exists wanna create another');
    }
  });
};

const saveExperience = (type, content, callback) => {
  const insertQuery = 'INSERT INTO experiences (type, content) VALUES (?, ?)';
  pool.query(insertQuery, [type, content], (error, results) => {
    if (error) {
      console.error('Error saving experience:', error);
      callback(error, null);
    } else {
      console.log('Experience saved successfully');
      callback(null, results);
    }
  });
};

module.exports = {
  createExperiencesTable,
  saveExperience,
};

