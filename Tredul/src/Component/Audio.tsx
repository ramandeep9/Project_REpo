import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import './ShareExperience.css';
import type { GetProp, UploadFile, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const Audio: React.FC = () => {

 const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const Uploadhandle = () => {
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

  const propsprop: UploadProps = {
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

  return (
    <>
    <div className="share-option">
      
       <div className="content">
          <h3>Share Audio</h3>
      <Upload {...propsprop}>
        <Button className="dev"  icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        type="primary"
        className="dev"
        onClick={Uploadhandle}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 , backgroundColor:"green"  ,color:"white"}}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
      
      </div></div>
    </>
  );
};

export default Audio;