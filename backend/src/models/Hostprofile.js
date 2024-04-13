

const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'database_tredul'
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
  const insertQuery = 'INSERT INTO contact (name, email, mobile, application, query) VALUES (?, ?, ?, ?, ?)';
  pool.query(insertQuery, [name, email, mobile, application, query], (error, results) => {
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
