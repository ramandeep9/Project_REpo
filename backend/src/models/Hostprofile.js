const pool = require('../config/db');

const HostProfile = {
    createHostProfileTable: async () => {
        try {
            const connection = await pool.getConnection();

            // Check if the table already exists
            const [rows] = await connection.query('SHOW TABLES LIKE ?', ['hostprofile']);
            if (rows.length === 0) {
                // Table does not exist, create it
                await connection.query(`
                    CREATE TABLE hostprofile (
                      id INT AUTO_INCREMENT PRIMARY KEY,
                      host_type VARCHAR(255) NOT NULL,
                      host_name VARCHAR(255) NOT NULL,
                      contact_person_name VARCHAR(255) NOT NULL,
                      contact_person_designation VARCHAR(255) NOT NULL,
                      contact_info VARCHAR(255) NOT NULL,
                      email_address VARCHAR(255) NOT NULL,
                      website VARCHAR(255),
                      address_line_1 VARCHAR(255) NOT NULL,
                      address_line_2 VARCHAR(255),
                      state VARCHAR(255),
                      city VARCHAR(255),
                      pincode VARCHAR(10),
                      country VARCHAR(255),
                      year_of_establishment INT NOT NULL,
                      affiliation_accreditation VARCHAR(255) NOT NULL,
                      specializations TEXT NOT NULL,
                      host_profile_image VARCHAR(255),
                      host_description TEXT,
                      latitude DECIMAL(10, 8),
                      longitude DECIMAL(11, 8),
                      facebook_link VARCHAR(255),
                      twitter_link VARCHAR(255),
                      instagram_link VARCHAR(255),
                      linkedin_link VARCHAR(255)
                    )
                    
                `);
                console.log('Host profiles table created successfully');
            } else {
                console.log('Host profiles table already exists');
            }

            connection.release();
        } catch (error) {
            throw error;
        }
    },

    create: async (hostProfileData) => {
        try {
            const connection = await pool.getConnection();
            const result = await connection.query('INSERT INTO hostprofile SET ?', [hostProfileData]);
            connection.release();
            return { message: 'Host profile created successfully', id: result.insertId };
        } catch (error) {
            throw error;
        }
    },

    findById: async (id) => {
        try {
            const connection = await pool.getConnection();
            const [rows] = await connection.query('SELECT * FROM hostprofile WHERE id = ?', [id]);
            connection.release();
            return rows[0];
        } catch (error) {
            throw error;
        }
    },

    updateById: async (id, hostProfileData) => {
        try {
            const connection = await pool.getConnection();
            await connection.query('UPDATE hostprofile SET ? WHERE id = ?', [hostProfileData, id]);
            connection.release();
            return { message: 'Host profile updated successfully' };
        } catch (error) {
            throw error;
        }
    },

    deleteById: async (id) => {
        try {
            const connection = await pool.getConnection();
            await connection.query('DELETE FROM hostprofile WHERE id = ?', [id]);
            connection.release();
            return { message: 'Host profile deleted successfully' };
        } catch (error) {
            throw error;
        }
    },

    findAll: async () => {
        try {
            const connection = await pool.getConnection();
            const [rows] = await connection.query('SELECT * FROM hostprofile');
            connection.release();
            return rows;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = HostProfile;
