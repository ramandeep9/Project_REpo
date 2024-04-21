require('dotenv').config();
const db = require('../config/db');

const createUser = async ({  username,email, password , role}) => {
  const pool = await db.getConnection();
  try {
    const [result] = await pool.execute(
      'INSERT INTO register(username,email, password,  role) VALUES (?, ?, ?, ?)',
      [ username,email, password, role ]
    );
    return result.insertId;
  } finally {
    pool.release();
  }
};

const findUserByEmail = async (email) => {
  const pool = await db.getConnection();
  try {
    const [result] = await pool.execute(
      'SELECT * FROM register WHERE email = ?',
      [email]
    );
    return result[0];
  } finally {
    pool.release();
  }
};
module.exports = {
    createUser,
    findUserByEmail,
    
  };