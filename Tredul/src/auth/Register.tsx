
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import './register.css';
import toast from 'react-hot-toast';

// Define the type for formData
interface FormData {
  username: string;
  email: string;
  password: string;
  role: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    role: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    // Clear the corresponding error when input changes
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Perform validation
    const validationErrors: Partial<FormData> = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }
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
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://tredul-backend.vercel.app/auth/register', formData);
      console.log('Signup successful:', response.data);
      toast.success("Account created")
      navigate('/login');
    } catch (error: any) {
      handleAxiosError(error);
    }

    setLoading(false);
  };

  const handleUserTypeSelect = (type: string) => {
        //Popup confirmation alert when user type is selected
        const confirmRegister = window.confirm(`Are you sure you want to register as a ${type}?`);
        if (confirmRegister) {
          setRole(type);
        }
      };
    

      const handleAxiosError = (error: AxiosError<any>) => {
        if (error.response) {
          console.error('Server responded with error status:', error.response.status);
          console.error('Error response data:', error.response.data);
          window.alert("Account Already created : Login");

          toast.error('Server responded with error status: ' + error.response.status);
        } else if (error.request) {
          console.error('No response received from server:', error.request);
          toast.error('No response received from server');
        } else {
          console.error('Error setting up the request:', error.message);
          toast.error('Error setting up the request: ' + error.message);
        }
      };
      

  const renderRegisterForm = () => {
    // Render register form based on selected user type
    if (role =='eduhost') {
      return (
        <div className="register-form">
          <div className="register-container">
            <h2 className="me">Create an Account</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Host Name"
                className="usernam"
                name="username"
                onChange={handleInput}
              />
              {errors.username && <p className="text-red-500">{errors.username}</p>}
              <input
                type="email"
                required
                placeholder="Email"
                className="usernam"
                name="email"
                onChange={handleInput}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <input
                type="password"
                placeholder="Password"
                className="usernam"
                name="password"
                onChange={handleInput}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
              <input type="hidden"
               name="role"
              value="0" />
              <button type="submit"
               className="mybtn"
                disabled={loading}>
                {loading ? 'Loading...' : 'Register'}
              </button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
            <Link to="/" className="back-link">Go back to Home Page</Link>
          </div>
        </div>
      );
    } else if (role =='edutourist') {
      return (
        <div className="register-form">
          <div className="register-container">
            <h2 className="me">Create an Account</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Tourist Name"
                className="usernam"
                name="username"
                onChange={handleInput}
              />
              {errors.username && <p className="text-red-500">{errors.username}</p>}
              <input
                type="email"
                required
                placeholder="Email"
                className="usernam"
                name="email"
                onChange={handleInput}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <input
                type="password"
                placeholder="Password"
                className="usernam"
                name="password"
                onChange={handleInput}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
              <input type="hidden" 
              name="role" value="1" />
              <button type="submit"
               className="mybtn" 
               disabled={loading}>
                {loading ? 'Loading...' : 'Register'}
              </button>
            </form>
            <p>Already have an account? 
              <Link to="/login">Login here</Link></p>
            <Link to="/" className="back-link">Go back to Home Page</Link>
          </div>
        </div>
      );
    } else {
      return null; // Render nothing if no user type is selected
    }
  };

  return (
    <div>
      <Navbar />
      <div className="register-page">
        <h1>Register</h1>
        {/* Select user type section */}
        <div className="user-type-selection">
          <h2>Select User Type</h2>
          <button onClick={() => {handleUserTypeSelect('eduhost');
          setFormData(prevState => ({
            ...prevState,
            role: '0'     
               }));
        }}>Register as EduHost</button>
          <button onClick={() => {handleUserTypeSelect('edutourist')
            setFormData(prevState => ({
              ...prevState,
              role: '1'     
                 }));
          }}>Register as EduTourist</button>
        </div>
        {/* Render register form based on selected user type */}
        {renderRegisterForm()}
      </div>
      <Footer />
    </div>
  );
};

export default Register;
