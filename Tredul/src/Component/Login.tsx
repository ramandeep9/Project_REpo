import React, { useState, FormEvent } from 'react';
import  { useEffect } from 'react';
import logo from "../asset/logo.png";
import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import './login.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Button } from "antd";
interface FormErrors {
  email?: string;
  password?: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});   

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
    
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      validationErrors.password = 'Password should be at least 8 characters';
    }
  
    // If there are validation errors, set them and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('https://tredul-backend.vercel.app/auth/login', formData);
      console.log('SignIn successful:', JSON.stringify(response.data));
      setLoading(false);
      
      // Store user data in local storage
      const {id,email,token}= response.data;
      localStorage.setItem('id',id);
     localStorage.setItem('email',email);
     localStorage.setItem('token', token);
  
      const userRole = response.data.role; // Assuming response.data contains role information
      toast.success('Login successful');
      if (userRole == 0) {
          navigate('/DashboardHost');
      } else if (userRole == 1) {
          navigate('/Dashboardtour');
      } 
    } catch (error) {
      setLoading(false);
      console.error('Error logging in:', error);
      toast.error('Error logging in. Please try again.');
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
}, []);
  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="tredul-logo"><img className="mylogo" alt="location" src={logo} /></div>
        <div className="log"><h1 className="head">Login to Tredul</h1></div>
        <form onSubmit={handleSubmit}>
          <input
            className="passe"
            type="E-mail"
            placeholder=" Enter Email"
            onChange={handleChange}
            name="email"
            
          />
              {errors.email && <p className="">{errors.email}</p>}
              <input
            className="passe"
            type="password"
            placeholder="Enter Password"
            onChange={handleChange}
            name="password" 
          />
           {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>} {/* Render password error message */}
          
           <button type="submit" className="btn60" disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
        <a href="/ForgotPassword">Forgot Password?</a>
        <p className="rs">Don't have an account? <Link to="/register">Register here</Link></p>
        <Link to="/" className="back-link">Go back to Home Page</Link>
      </div>
      <Footer />
      <div className="copy"> Copyright @DHE 2024 </div>
    </div>
  );
};

export default Login;







