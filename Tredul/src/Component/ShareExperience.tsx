import Navbar from "./Nav";

import { Link } from 'react-router-dom';
import ph from "../asset/back.jpg"
import React, { useState,useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import './ShareExperience.css';
import type { GetProp, UploadFile, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const App: React.FC = () => {

 const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file as FileType);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch('https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
}, []);

  return (
    <><Navbar/>
    <div className="cnttt23">
  
       <div className="content">
          <h3>Share Photo</h3>
      <Upload {...props}>
        <Button className="dev" icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        type="primary"
        className="dev"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 , backgroundColor:"green"  ,color:"white"}}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
     
      </div>
      <div className="f">
          <h3 className="n1">Share Your Experience</h3>
            <textarea id="qwery" name="Type" placeholder="Type" required></textarea>
          </div><button type="submit" className="ct">Submit</button>
      </div>
        
       <div className="parent700">   
       
      <div className="transparent-image23">
      
        <img src={ph}  alt="Image 1" className="img0" />
      </div>
      
   </div>
   <Link to="/" className="back-link">Go back to Home Page</Link>
    </>
    
  );
};

export default App;
