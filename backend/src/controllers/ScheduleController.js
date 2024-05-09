const { getConnection } = require('../config/db');
const Schedule=require('../models/schedule')

// Controller functions
exports.createSchedule = async (req, res) => {
  const { id, date, time } = req.body;
  
  if (!id) {
    res.status(400).json({ error: 'User ID is required' });
    return;
  }

  try {
    const connection = await getConnection();
    const q='SET GLOBAL FOREIGN_KEY_CHECKS=0;'
     await connection.query(q);
    const query = 'INSERT INTO schedules (id, date, time) VALUES (?, ?, ?)';
    const [result] = await connection.query(query, [id, date, time]);
    connection.release();
    res.status(201).json({ message: 'Schedule created successfully', scheduleId: result.insertId });
  } catch (error) {
    console.error('Error creating schedule:', error);
    res.status(500).json({ error: 'Error creating schedule' });
  }
};

exports.updateSchedule = async (req, res) => {
  const { schedule_id } = req.params; // Assuming the schedule ID is passed in the URL
  const { date, time } = req.body;
  try {
    const connection = await getConnection();
    try {
      const query = 'UPDATE schedules SET date=?, time=? WHERE schedule_id=?';
      await connection.query(query, [date, time, schedule_id]);
      res.status(200).json({ message: 'Schedule updated successfully' });
    } catch (error) {
      console.error('Error updating schedule:', error);
      res.status(500).json({ error: 'Error updating schedule' });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error('Error establishing database connection:', error);
    res.status(500).json({ error: 'Error establishing database connection' });
  }
};

exports.deleteSchedule = async (req, res) => {
  const { schedule_id } = req.params; // Assuming the schedule ID is passed in the URL
  try {
    const connection = await getConnection();
    try {
      const query = 'DELETE FROM schedules WHERE schedule_id=?';
      const [result] = await connection.query(query, [schedule_id]);
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Schedule not found' });
        return;
      }
      res.status(200).json({ message: 'Schedule deleted successfully' });
    } catch (error) {
      console.error('Error deleting schedule:', error);
      res.status(500).json({ error: 'Error deleting schedule' });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error('Error establishing database connection:', error);
    res.status(500).json({ error: 'Error establishing database connection' });
  }
};


exports.getSchedule = async (req, res) => {
  const { schedule_id } = req.params; // Assuming the schedule ID is passed in the URL
  try {
    const connection = await getConnection();
    try {
      const query = 'SELECT * FROM schedules WHERE schedule_id=?';
      const [result] = await connection.query(query, [schedule_id]);
      if (result.length === 0) {
        res.status(404).json({ error: 'Schedule not found' });
        return;
      }
      res.status(200).json(result[0]);
    } catch (error) {
      console.error('Error fetching schedule:', error);
      res.status(500).json({ error: 'Error fetching schedule' });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error('Error establishing database connection:', error);
    res.status(500).json({ error: 'Error establishing database connection' });
  }
};

exports.getAllSchedules = async (req, res) => {
  try {
    const connection = await getConnection();
    try {
      const query = 'SELECT * FROM schedules';
      const [results] = await connection.query(query);
      res.status(200).json(results);
    } catch (error) {
      console.error('Error fetching schedules:', error);
      res.status(500).json({ error: 'Error fetching schedules' });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error('Error establishing database connection:', error);
    res.status(500).json({ error: 'Error establishing database connection' });
  }
};
