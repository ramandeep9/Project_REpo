// models/schedule.js
const { getConnection } = require('../config/db');

const createTableQuery = `CREATE TABLE IF NOT EXISTS schedules (
  schedule_id INT AUTO_INCREMENT PRIMARY KEY,
  id INT,
  date DATE,
  time TIME,
  FOREIGN KEY (id) REFERENCES register(id)
)`;

const createScheduleTable = async () => {
  const connection = await getConnection();
  try {
    await connection.query(createTableQuery);
    console.log('Schedules table created or already exists');
  } catch (error) {
    console.error('Error creating schedules table:', error);
  } finally {
    connection.release();
  }
};

createScheduleTable();
