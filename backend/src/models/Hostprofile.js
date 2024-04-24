const pool = require('../config/db');
const path =require('path')


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
                      host_person_name VARCHAR(255) NOT NULL,
                      email_address VARCHAR(255) NOT NULL,
                      contact_person_designation VARCHAR(255) NOT NULL,
                      host_type VARCHAR(255) NOT NULL,
                      host_name VARCHAR(255) NOT NULL,
                      contact_info INT(10) NOT NULL,
                      address_line_1 VARCHAR(255) NOT NULL,
                      address_line_2 VARCHAR(255),
                      state VARCHAR(255) NOT NULL,
                      street VARCHAR(255) NOT NULL,
                      city VARCHAR(255) NOT NULL,
                      pincode VARCHAR(10) NOT NULL,
                      country VARCHAR(255) DEFAULT 'Indian',
                      year_of_establishment INT NOT NULL,
                      affliation VARCHAR(255) NOT NULL,
                      website VARCHAR(255),
                      host_profile_image VARCHAR(255),
                      host_description TEXT NOT NULL,
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
    // create :async (hostProfileData, profileImage) => {
    //     try {
    //         const connection = await pool.getConnection();
    //         let hostProfileImage = null;
    
    //         // If a profile image is provided, upload it
    //         if (profileImage) {
    //             // Assuming you have configured Multer to upload files to a specific directory
    //             // Replace 'profileImages' with the directory where you want to store profile images
    //             hostProfileImage = `profileImages/${profileImage.filename}`;
    //         }
    
    //         const result = await connection.query('INSERT INTO hostprofile SET ?', [{ ...hostProfileData, host_profile_image: hostProfileImage }]);
    //         connection.release();
    //         return { message: 'Host profile created successfully', id: result.insertId };
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    

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

    // updateById: async (id, hostProfileData) => {
    //     try {
    //         const connection = await pool.getConnection();
    //         await connection.query('UPDATE hostprofile SET ? WHERE id = ?', [hostProfileData, id]);
    //         connection.release();
    //         return { message: 'Host profile updated successfully' };
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    deleteById: async (req, res) => {
        const { id } = req.params;
        try {
          const connection = await pool.getConnection();
          
          // Check if the host profile with the given ID exists
          const [existingProfile] = await connection.query('SELECT id FROM hostprofile WHERE id = ?', [id]);
          if (existingProfile.length === 0) {
            // If the host profile does not exist, send a 404 response with a custom error message
            return res.status(404).json({ error: `Host profile with ID ${id} not found` });
          }
        
          // Delete the host profile if it exists
          await connection.query('DELETE FROM hostprofile WHERE id = ?', [id]);
          connection.release();
          
          // Send success response
          res.status(200).json({ message: 'Host profile deleted successfully' });
        } catch (error) {
          console.error({ message: `Host profile with id ${id} not found.` })
          res.status(500).json({ error: 'An error occurred while deleting the host profile.' });
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
    },


};

module.exports = HostProfile;
