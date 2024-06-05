import React, { useEffect } from 'react';
import { Drawer, Spin } from 'antd';
import ChangePassword from '../ChangePassword';
import ImageUpload from './ImageUpload';
import { useNavigate  } from 'react-router-dom';
import { toast } from 'react-hot-toast';


// Define the functional component with TypeScript
const Settings: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  // Define the showLoading function with appropriate typing
  const showLoading = (): void => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in the real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically clear local storage after 24 hours
    const clearLocalStorage = () => {
      localStorage.clear();
      toast.success('Local storage cleared!');
    };

    const clearLocalStorageTimeout = setTimeout(clearLocalStorage, 24 * 60 * 60 * 1000);

    return () => clearTimeout(clearLocalStorageTimeout);
  }, []);


  

  return (
    <>
      <span
        style={{ color: 'white', cursor: 'pointer' }}
        onClick={showLoading}
      >
        Settings
      </span>
      <Drawer
        closable
        destroyOnClose
        title={<p>Settings</p>}
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        {loading ? (
          <Spin tip="Loading...">
            <div style={{ height: '100px' }}></div>
          </Spin>
        ) : (
          <>
            <span
              style={{ color: '#9e9ea4', cursor: 'pointer', marginBottom: 16, display: 'block' }}
              onClick={showLoading}
            >
              Reload
            </span>
            <button style={{ width: '100%', display: 'inline-block' }}>
        <a href="/ChangePassword" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>Change Password</a>
      </button>
      <button style={{ width: '100%', display: 'inline-block' }}>
        <a href="/ImageUpload" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>Change Profile Image</a>
      </button> 
     
    
     
      
          </>
        )}
      </Drawer>
    </>
  );
};

export default Settings;

