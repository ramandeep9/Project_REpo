import React, { useState } from 'react';
import Navbar from './Nav';
import Footer from './Footer';
import axios from 'axios';
import './changepassword.css'
import toast from 'react-hot-toast';

const ChangePassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
    setState(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password must match');
      return;
    }

    setError('');

    try {
      const response = await axios.post('http://localhost:8080/auth/password-reset', {
        currentPassword,
        newPassword,
      });

      if (response.status === 200) {
        toast.success('Password changed successfully');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      toast.error('Error changing password. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <form className="password-form" onSubmit={handleSubmit}>
          <h2>Change Password</h2>
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password:</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => handleChange(e, setCurrentPassword)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => handleChange(e, setNewPassword)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => handleChange(e, setConfirmPassword)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Change Password</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;
