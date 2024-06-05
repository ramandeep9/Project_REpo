import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
    setState(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (!otp || !password || !confirmPassword) {
        setError('All fields are required');
        return;
      }
      if (password !== confirmPassword) {
        setError('New password and confirm password must match');
        return;
      }

      const response = await axios.post('https://tredul-backend.vercel.app/auth/reset-password', {
        otp,
        password,
      });

      if (response.status === 201) {
        toast.success('Password changed successfully');
        navigate("/login")
      }
    } catch (error) {
      console.error('Error changing password:', error);
      toast.error('Error changing password. Please try again.');
    }
  };

  return (
    <div>
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
        <form style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} onSubmit={handleSubmit}>
          <h2>Change Password</h2>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="otp">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => handleChange(e, setOtp)}
              placeholder="Enter OTP"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => handleChange(e, setPassword)}
              placeholder="Enter New Password"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => handleChange(e, setConfirmPassword)}
              placeholder="Confirm New Password"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          <button type="submit" style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
