import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ForgotPassword: React.FC = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    
    // Perform validation
    const validationErrors: { [key: string]: string } = {};

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is invalid';
    }

    // If there are validation errors, set them and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      // Make API call to forgot password endpoint
      const response = await axios.post('https://tredul-backend.vercel.app/auth/forgot-password', formData);
      console.log('Forgot Password successful:', response.data);
      setLoading(true);
      toast.success('Password reset instructions sent to your email');
      navigate('/ChangePassword');
    } catch (error) {
      setLoading(false);
      console.error('Error with forgot password:', error);
      toast.error('Error resetting password. Please try again.');
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: 'auto', width: '50%' }}>
      <h1 style={{ marginBottom: '20px' }}>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', backgroundColor: '#23rfff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;