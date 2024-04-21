
import { Link } from 'react-router-dom';

import Footer from "../Footer";
import './profilecompletion.css'
import React, { useState, useEffect } from 'react';
import { Form, Input,Upload, Button ,Select, Space, Row, Col } from 'antd';

import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;


const ProfileHost: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptions, setSelectedOptions] = useState('');
    const inputStyle = { width: '100%', borderColor: '#448f5d'};
    const selectStyle = { borderColor: '#448f5d' };
    const [fileList, setFileList] = useState<any[]>([]);

   
        const handlesChanges = ({ fileList }: { fileList: any[] }) => {
        // Update the state with the new file list
        setFileList(fileList);
    };

    const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleChanges = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions(event.target.value);
  };
  return (
    <div>
    <div className="profile-us-container">
       <h2 className="profile-us-header">Profile  <span  className='Touchcolor1'>Setup</span></h2>
       
       <h3 className = "profile-us-innerheader">Wrap up your deets and hit the finish line!</h3>
      <div className="profile-form-container">
        <form className="profile-form">
          <div className="profileform-group">
          <h3 className="nm2"> Host Name</h3>
            <input type="text" className="inputt3" id="name1" name="name" placeholder="Host Name..." required />
          </div>
          <div className="profileform-group">
          <h3 className="nm2">Email</h3>
            <input className="inputt3" type="email_L" id="email1" name="email" placeholder="Your Email" required />
          </div>
          <div className="profileform-group">
          <h3 className="nm2">Mobile No.</h3>
            <input className="inputt3" type="tel" id="mobile1" name="mobile" placeholder="Your Mobile Number" required />
          </div>
          <div className="profileform-group">
          <h3 className="nm2">Designation</h3>
            <input className="inputt3" type="email_L" id="email1" name="email" placeholder="Designation" required />
          </div>
          
 <div className="profileform-group">
          <h3 className="nm2">Schools/College/University Name</h3>
            <input className="inputt3" type="email_L" id="email1" name="email" placeholder="Schools/College/University Name" required />
          </div>
          <div className="profileform-group">
          <h3 className="nm2">Highest Qualification</h3>
          <div>
      
      <select id="dropdown1" value={selectedOption} onChange={handleChange} className="inputt31" >
        <option value="">-- Choose Highest Qualification--</option>
        <option value="option1">Bachelor's Degree</option>
        <option value="option2">Master's Degree</option>
        <option value="option3">Doctorate or higher</option>
      </select>
     
    </div>
          </div>
          <div className="profileform-group">
          <h3 className="nm2">Language Proficiency</h3>
          <div>
      
      <select id="dropdown1" value={selectedOptions} onChange={handleChanges} className="inputt31" >
        <option value="">-- Choose Language--</option>
        <option value="AF">Afrikaans</option>
  <option value="SQ">Albanian</option>
  <option value="AR">Arabic</option>
  <option value="HY">Armenian</option>
  <option value="EU">Basque</option>
  <option value="BN">Bengali</option>
  <option value="BG">Bulgarian</option>
  <option value="CA">Catalan</option>
  <option value="KM">Cambodian</option>
  <option value="ZH">Chinese (Mandarin)</option>
  <option value="HR">Croatian</option>
  <option value="CS">Czech</option>
  <option value="DA">Danish</option>
  <option value="NL">Dutch</option>
  <option value="EN">English</option>
  <option value="ET">Estonian</option>
  <option value="FJ">Fiji</option>
  <option value="FI">Finnish</option>
  <option value="FR">French</option>
  <option value="KA">Georgian</option>
  <option value="DE">German</option>
  <option value="EL">Greek</option>
  <option value="GU">Gujarati</option>
  <option value="HE">Hebrew</option>
  <option value="HI">Hindi</option>
  <option value="HU">Hungarian</option>
  <option value="IS">Icelandic</option>
  <option value="ID">Indonesian</option>
  <option value="GA">Irish</option>
  <option value="IT">Italian</option>
  <option value="JA">Japanese</option>
  <option value="JW">Javanese</option>
  <option value="KO">Korean</option>
  <option value="LA">Latin</option>
  <option value="LV">Latvian</option>
  <option value="LT">Lithuanian</option>
  <option value="MK">Macedonian</option>
  <option value="MS">Malay</option>
  <option value="ML">Malayalam</option>
  <option value="MT">Maltese</option>
  <option value="MI">Maori</option>
  <option value="MR">Marathi</option>
  <option value="MN">Mongolian</option>
  <option value="NE">Nepali</option>
  <option value="NO">Norwegian</option>
  <option value="FA">Persian</option>
  <option value="PL">Polish</option>
  <option value="PT">Portuguese</option>
  <option value="PA">Punjabi</option>
  <option value="QU">Quechua</option>
  <option value="RO">Romanian</option>
  <option value="RU">Russian</option>
  <option value="SM">Samoan</option>
  <option value="SR">Serbian</option>
  <option value="SK">Slovak</option>
  <option value="SL">Slovenian</option>
  <option value="ES">Spanish</option>
  <option value="SW">Swahili</option>
  <option value="SV">Swedish </option>
  <option value="TA">Tamil</option>
  <option value="TT">Tatar</option>
  <option value="TE">Telugu</option>
  <option value="TH">Thai</option>
  <option value="BO">Tibetan</option>
  <option value="TO">Tonga</option>
  <option value="TR">Turkish</option>
  <option value="UK">Ukrainian</option>
  <option value="UR">Urdu</option>
  <option value="UZ">Uzbek</option>
  <option value="VI">Vietnamese</option>
  <option value="CY">Welsh</option>
  <option value="XH">Xhosa</option>
      </select>
     
    </div> 
    <div className="profile-form-group">
            <h3 className="nm2">Address</h3>
            <Form
                name="complex-form"
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 1000 }}
                
            >
                <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                    <Col span={12}>
                        <Input style={inputStyle} placeholder="Address Line 1" />
                    </Col>
                    <Col span={12}>
                        <Input style={inputStyle} placeholder="Address Line 2 (Optional)" />
                    </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                    <Col span={12}>
                        <Input style={inputStyle} placeholder="Street" />
                    </Col>
                    <Col span={12}>
                        <Input style={inputStyle} placeholder="City" />
                    </Col>
                </Row>
                <Row gutter={[16, 16]} className="str" style={{ marginBottom: 16 }}>
                    <Col span={8}  >
                        <Input style={inputStyle} placeholder="Pincode" className="pin" />
                    </Col>
                    <Col span={8}>
                        <Select className="ss" placeholder="Select State" style={selectStyle}>
                        <Option value="AP">Andhra Pradesh</Option>
  <Option value="AR">Arunachal Pradesh</Option>
  <Option value="AS">Assam</Option>
  <Option value="BR">Bihar</Option>
  <Option value="CT">Chhattisgarh</Option>
  <Option value="GA">Goa</Option>
  <Option value="GJ">Gujarat</Option>
  <Option value="HR">Haryana</Option>
  <Option value="HP">Himachal Pradesh</Option>
  <Option value="JK">Jammu and Kashmir</Option>
  <Option value="JH">Jharkhand</Option>
  <Option value="KA">Karnataka</Option>
  <Option value="KL">Kerala</Option>
  <Option value="MP">Madhya Pradesh</Option>
  <Option value="MH">Maharashtra</Option>
  <Option value="MN">Manipur</Option>
  <Option value="ML">Meghalaya</Option>
  <Option value="MZ">Mizoram</Option>
  <Option value="NL">Nagaland</Option>
  <Option value="OR">Odisha</Option>
  <Option value="PB">Punjab</Option>
  <Option value="RJ">Rajasthan</Option>
  <Option value="SK">Sikkim</Option>
  <Option value="TN">Tamil Nadu</Option>
  <Option value="TG">Telangana</Option>
  <Option value="TR">Tripura</Option>
  <Option value="UT">Uttarakhand</Option>
  <Option value="UP">Uttar Pradesh</Option>
  <Option value="WB">West Bengal</Option>
  <Option value="AN">Andaman and Nicobar Islands</Option>
  <Option value="CH">Chandigarh</Option>
  <Option value="DN">Dadra and Nagar Haveli</Option>
  <Option value="DD">Daman and Diu</Option>
  <Option value="DL">Delhi</Option>
  <Option value="LD">Lakshadweep</Option>
  <Option value="PY">Puducherry</Option>
                        </Select>
                    </Col>
                    <Col span={8}>
                        <Select className="ss" placeholder="Select Country" style={selectStyle}>
                            <Option value="India">India</Option>
                            {/* Other country options */}
                        </Select>
                    </Col>
                </Row>
            </Form>
        </div>
        <Form.Item
            label="Year of Establishment"
            name="establishmentYear"
            className="nm2"
            rules={[{ required: true, message: 'Please input the year of establishment!' }]}
        >
           <br/> <Input type="number" className="wid" placeholder="Enter year" />
        </Form.Item>
        <Form.Item
            label="Affiliation/Accreditation"
            name="affiliationAccreditation"
            rules={[{ required: true, message: 'Please input the affiliation/accreditation!' }]}
        >
          <br/>  <Input  className="wid"  placeholder="Enter affiliation/accreditation" />
        </Form.Item>
        <Form.Item
            label="Specialization"
            name="specialization"
        >
           <br/> <Input  className="wid"  placeholder="Enter specialization (optional)" />
        </Form.Item>
        <Form.Item
            label="Social Media Links"
            name="socialMediaLinks"
        >
         <br/>   <Input.TextArea rows={4}   className="wid"  placeholder="Paste social media links (optional, one per line)" />
        </Form.Item>
        <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please provide a description about yourself!' }]}
        >
           <br/> <Input.TextArea rows={4}   className="wid"  placeholder="Write a description about yourself" />
        </Form.Item>
        <Form.Item
            label="Profile Image"
            name="profileImage"
        >
            <Upload
                fileList={fileList}
                onChange={handlesChanges}
                beforeUpload={() => false} // To prevent auto upload
                listType="picture"
                maxCount={1}
               
            >
                <Button className="uploa" icon={<UploadOutlined />}>Upload</Button>
            </Upload>
        </Form.Item>
          </div>        
          <button type="submit" className="submit-btn1">Submit</button>
        </form>
      </div>
      <Link to="/" className="back-link">Go back to Home Page</Link>
  
    </div><div><Footer/></div><div className="copy"> Copyright @DHE 2024 </div></div>
  );
};

export default ProfileHost;













