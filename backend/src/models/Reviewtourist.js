// const pool = require('../config/db');

// // Define the create table queries
// const createReviewsTableQuery = `
//   CREATE TABLE IF NOT EXISTS reviews (
//     review_id INT AUTO_INCREMENT PRIMARY KEY,
//     review_text TEXT NOT NULL,
//     star INT NOT NULL,
//     FOREIGN KEY (review_id) REFERENCES register(id),
//   )
// `;

// // Function to create reviews table
// const createReviewsTable = () => {
//   pool.query(createReviewsTableQuery, (err) => {
//     if (err) {
//       console.error('Error creating reviews table:', err);
//       return;
//     }
//     console.log('Reviews table created successfully');
//   });
// };

// // Function to check if table exists
// const checkTableExists = async (tableName) => {
//     try {
//       const connection = await pool.getConnection();
//       const [rows] = await connection.execute(`SHOW TABLES LIKE '${tableName}'`);
//       connection.release();
//       return rows.length > 0;
//     } catch (error) {
//       console.error('Error checking table:', error);
//       throw error;
//     }
//   };
  

// // Check if tables exist and create them if not
// const checkAndCreateTables = () => {
//   checkTableExists('reviews', (err, exists) => {
//     if (err) {
//       console.error('Error checking reviews table:', err);
//       return;
//     }
//     if (!exists) {
//       createReviewsTable();
//     } else {
//       console.log('Reviews table already exists');
//     }
//   });
// };

// const create = async (reviewData) => {
//     try {
//         const connection = await pool.getConnection();
//         const result = await connection.query('INSERT INTO reviews (review_text, star) VALUES (?, ?)', [reviewData.review_text, reviewData.star]);
//         connection.release();
//         return { message: 'Review creation successful', id: result.insertId };
//     } catch (error) {
//         throw error;
//     }
// };

  
// checkAndCreateTables();
// module.exports = { create};
