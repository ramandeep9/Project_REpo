const pool = require('../config/db');

const Tourist = {
    createTouristTable: async () => {
        try {
            const connection = await pool.getConnection();

            // Check if the touristprofile table exists
            const [existingTables] = await connection.query("SHOW TABLES LIKE 'touristprofile'");
            if (existingTables.length === 0) {
                // Create the touristprofile table if it doesn't exist
                await connection.query(`
                    CREATE TABLE touristprofile (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        tourist_name VARCHAR(255),
                        contact_info VARCHAR(255),
                        email_address VARCHAR(255),
                        nationality VARCHAR(255),
                        preferred_language VARCHAR(255),
                        travel_preferences VARCHAR(255),
                        accommodation_preferences VARCHAR(255),
                        dietary_restrictions VARCHAR(255),
                        emergency_contact_info VARCHAR(255),
                        travel_history TEXT,
                        instagram_link VARCHAR(255),
                        facebook_link VARCHAR(255),
                        linkedin_link VARCHAR(255),
                        twitter_link VARCHAR(255)
                    )
                `);
                console.log('Tourist profile table created successfully');
            } else {
                console.log('Tourist profile table already exists');
            }

            connection.release();
        } catch (error) {
            throw error;
        }
    },

    create: async (touristData) => {
        try {
            const connection = await pool.getConnection();
            const result = await connection.query('INSERT INTO touristprofile SET ?', [touristData]);
            connection.release();
            return { message: 'Touristprofile registration successful', id: result.insertId };
        } catch (error) {
            throw error;
        }
    },

    findById: async (id) => {
        try {
            const connection = await pool.getConnection();
            const [rows] = await connection.query('SELECT * FROM touristprofile WHERE id = ?', [id]);
            connection.release();
            return rows[0];
       } catch (error) {
            throw error;
        }
    },

    updateById: async (id, updatedTouristData) => {
        try {
            const connection = await pool.getConnection();
            const res = await connection.query('UPDATE touristprofile SET ? WHERE id = ?', [updatedTouristData, id]);
            connection.release();
             console.log(res)
              if (updatedTouristData.affectedRows === 0) {
                throw new Error('Tourist not found or no changes made');
              }

            const updatedTourist = await connection.query('SELECT * FROM touristprofile WHERE id = ?', [id]);
            connection.release();
    
            return {
                message: 'Tourist information updated successfully',
                updatedTourist: updatedTourist[0]
            };
        } catch (error) {
            throw error;
        }
    },
    


    deleteById: async (id) => {
        try {
            const connection = await pool.getConnection();
            
            await connection.query('DELETE FROM touristprofile WHERE id = ?', [id]);
            console.log(id);
            connection.release();
            return { message: 'Tourist information deleted successfully' };
        } catch (error) {
            throw error;
        }
    },

    findAll: async () => {
        try {
            const connection = await pool.getConnection();
            const [rows] = await connection.query('SELECT * FROM touristprofile');
            connection.release();
            return rows;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = Tourist;
