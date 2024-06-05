import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Footer from "../Footer";
import "./profilecompletion.css";
import React, { useState, useEffect } from "react";
import { Form, Input, Upload, Button, Select, Space, Row, Col, UploadProps } from "antd";
import {  message } from 'antd';
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;


const ProfileHost: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptions, setSelectedOptions] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const inputStyle = { width: "100%", borderColor: "#448f5d" };
  const selectStyle = { borderColor: "#448f5d" };
  const [fileList, setFileList] = useState<any[]>([]);

  const handlesChanges = ({ fileList }: { fileList: any[] }) => {
    setFileList(fileList);
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setProfileData((prevData) => ({
      ...prevData,
      host_type: event.target.value, // Update the corresponding field in ProfileData
    }));
  };

  const handleChanges = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption3(event.target.value);
  };

  const handleChanges1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption4(event.target.value);
  };
  const [ProfileData, setProfileData] = useState({
    host_person_name: "",
    email_address: "",
    contact_person_designation: "",
    host_type: "",
    host_name: "",
    contact_info: "",
    address_line_1: "",
    address_line_2: "",
    state: "",
    street: "",
    city: "",
    pincode: "",
    country: "",
    year_of_establishment: "",
    affliation: "",
    website: "",
    host_profile_image:null,
    host_description: "",
    facebook_link: "",
    twitter_link: "",
    instagram_link: "",
    linkedin_link: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const updatedProfileData = {
        ...ProfileData,
        host_type: selectedOption,
        state: selectedOption3,
        country: selectedOption4,
      };
     
      const response = await Axios.post(
        "https://tredul-backend.vercel.app/host/create",
        updatedProfileData,{
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
      console.log(response);
      if (response.status === 200) {
        // Handle success
        window.alert("Message sent successfully!");
       navigate("/DashboardHost");
        console.log("Message sent successfully");
      } else {
        // Handle other response statuses
        console.error("Failed to send message");
        window.alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      // Handle network errors or server-side errors
      console.error("Error sending message:", error);
      window.alert("An unexpected error occurred. Please try again later.");
    }
  };

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    
    
    
    if (event.target.type === "file") {
      const fileInput = event.target as HTMLInputElement;
      const selectedFile = fileInput.files && fileInput.files[0];
      
      
      if (selectedFile) {
        setProfileData((prevData) => ({
          ...prevData,
          [name]: selectedFile,
        }));
      }
    } else {
      setProfileData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
 

  return (
    <div>
      <div className="profile-us-container">
        <h2 className="profile-us-header">
          Profile <span className="Touchcolor1">Setup</span>
        </h2>

        <h3 className="profile-us-innerheader">
          Wrap up your deets and hit the finish line!
        </h3>
        <div className="profile-form-container">
          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="profileform-group">
              <h3 className="nm2">
                {" "}
                <span style={{ color: "green" }}>*</span> Host Name{" "}
              </h3>
              <input
                type="text"
                className="inputt3"
                id="name1"
                name="host_person_name"
                value={ProfileData.host_person_name}
                onChange={handleChangeInput}
                placeholder="Your Name"
               required
              />
            </div>
            <div className="profileform-group">
              <h3 className="nm2">
                <span style={{ color: "green" }}>*</span> Email{" "}
              </h3>
              <input
                className="inputt3"
                type="email"
                id="email1"
                name="email_address"
                value={ProfileData.email_address}
                onChange={handleChangeInput}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="profileform-group">
              <h3 className="nm2">
                {" "}
                <span style={{ color: "green" }}>*</span> Mobile No.
              </h3>

              <input
                className="inputt3"
                type="tel"
                id="mobile1"
                name="contact_info"
                value={ProfileData.contact_info}
                onChange={handleChangeInput}
                placeholder="Your Mobile Number"
                required
              />
            </div>
            <div className="profileform-group">
              <h3 className="nm2">
                <span style={{ color: "green" }}>*</span> Designation{" "}
              </h3>
              <input
                className="inputt3"
                type="text"
                id="contact_person_designation"
                name="contact_person_designation"
                placeholder="Designation"
                onChange={handleChangeInput}
                value={ProfileData.contact_person_designation}
                required
              />
            </div>
            <div className="profileform-group">
              <h3 className="nm2">
                {" "}
                <span style={{ color: "green" }}>*</span> Type{" "}
              </h3>
              <div>
                <select
                  id="dropdown1"
                  value={selectedOption}
                  onChange={handleChange}
                  className="inputt31"
                  required 
                >
                  <option value="">-- Choose Type--</option>
                  <option value="School">School</option>
                  <option value="College">College</option>
                  <option value="University">University</option>
                </select>
              </div>
            </div>

            <div className="profileform-group">
              <h3 className="nm2">
                <span style={{ color: "green" }}></span>{" "}
                Schools/College/University Name{" "}
                <span style={{ color: "green" }}></span>
              </h3>
              <input
                className="inputt3"
                type="text"
                id="host_name"
                name="host_name"
                placeholder="Schools/College/University Name"
                onChange={handleChangeInput}
                value={ProfileData.host_name}
                required 
              />
            </div>

            <div className="profile-form-group">
              <h3 className="nm2">
                <span style={{ color: "green" }}>*</span> Address{" "}
              </h3>
              <Form
                name="complex-form"
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                  <Col span={12}>
                    <Input
                      style={inputStyle}
                      placeholder="Address Line 1"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                      type="text"
                      id="address_line_1"
                      name="address_line_1"
                      onChange={handleChangeInput}
                      value={ProfileData.address_line_1}
                      required 
                    />
                  </Col>
                  <Col span={12}>
                    <Input
                      style={inputStyle}
                      placeholder="Address Line 2 (Optional)"
                      type="text"
                      id="address_line_2"
                      name="address_line_2"
                      onChange={handleChangeInput}
                      value={ProfileData.address_line_2}
                    />
                  </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                  <Col span={12}>
                    <Input
                      style={inputStyle}
                      placeholder="Street"
                      type="text"
                      id="street"
                      name="street"
                      onChange={handleChangeInput}
                      value={ProfileData.street}
                      required 
                    />
                  </Col>
                  <Col span={12}>
                    <Input
                      style={inputStyle}
                      placeholder="City"
                      type="text"
                      id="city"
                      name="city"
                      onChange={handleChangeInput}
                      value={ProfileData.city}
                      required 
                    />
                  </Col>
                </Row>
                <Row
                  gutter={[16, 16]}
                  className="str"
                  style={{ marginBottom: 16 }}
                >
                  <Col span={8}>
                    <Input
                      style={inputStyle}
                      placeholder="Pincode"
                      className="pin"
                      type="text"
                      id="pincode"
                      name="pincode"
                      onChange={handleChangeInput}
                      value={ProfileData.pincode}
                      required 
                    />
                  </Col>
                  <Col span={8}>
                    <div className="ss5">
                      <select
                        onChange={handleChanges}
                        className="ss"
                        value={selectedOption3}
                        required 
                      >
                        <option value="">Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option value="Jammu and Kashmir">
                          Jammu and Kashmir
                        </option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Andaman and Nicobar Islands">
                          Andaman and Nicobar Islands
                        </option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Dadra and Nagar Haveli">
                          Dadra and Nagar Haveli
                        </option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                      </select>
                    </div>
                  </Col>
                  <Col span={8}>
                    <select
                      onChange={handleChanges1}
                      className="ss"
                      value={selectedOption4}
                      required 
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      {/* Other country options */}
                    </select>
                  </Col>
                </Row>
              </Form>
            </div>
            <Form.Item
              label="Year of Establishment"
              name="establishmentYear"
              className="nm2"
              rules={[
                {
                  required: true,
                  message: "Please input the year of establishment!",
                },
              ]}
            >
              <br />{" "}
              <Input
                type="number"
                className="wid"
                placeholder="Enter year"
                id="year_of_establishment"
                name="year_of_establishment"
                onChange={handleChangeInput}
                value={ProfileData.year_of_establishment}
                required
              />
            </Form.Item>
            <Form.Item
              label="Affiliation/Accreditation"
              name="affiliationAccreditation"
              rules={[
                {
                  required: true,
                  message: "Please input the affiliation/accreditation!",
                },
              ]}
            >
              <br />{" "}
              <Input
                className="wid"
                placeholder="Enter affiliation/accreditation"
                id="affliation"
                name="affliation"
                onChange={handleChangeInput}
                value={ProfileData.affliation}
                required
              />
            </Form.Item>
            <Form.Item
              label="Website Link"
              name="Website Link"
              rules={[
                {required: true, message: "Please input the Website link" },
              ]}
            >
              <br />{" "}
              <Input
                className="wid"
                placeholder="Enter Website link"
                type="text"
                id="website"
                name="website"
                onChange={handleChangeInput}
                value={ProfileData.website}
                required
              />
            </Form.Item>
            <Form.Item label="Instagram Link" name="socialMediaLinks">
              <br />{" "}
              <Input.TextArea
                rows={1}
                className="wid"
                placeholder="Paste link here "
                id="instagram_link"
                name="instagram_link"
                onChange={handleChangeInput}
                value={ProfileData.instagram_link}
                
              />
            </Form.Item>
            <Form.Item label="Facebook Link" name="socialMediaLinks">
              <br />{" "}
              <Input.TextArea
                rows={1}
                className="wid"
                placeholder="Paste link here"
                id="facebook_link"
                name="facebook_link"
                onChange={handleChangeInput}
                value={ProfileData.facebook_link}
              />
            </Form.Item>
            <Form.Item label="Linkedin Link" name="socialMediaLinks">
              <br />{" "}
              <Input.TextArea
                rows={1}
                className="wid"
                placeholder="Paste link here "
                id="linkedin_link"
                name="linkedin_link"
                onChange={handleChangeInput}
                value={ProfileData.linkedin_link}
              />
            </Form.Item>
            <Form.Item label="Twitter Link" name="socialMediaLinks">
              <br />{" "}
              <Input.TextArea
                rows={1}
                className="wid"
                placeholder="Paste link here"
                id="twitter_link"
                name="twitter_link"
                onChange={handleChangeInput}
                value={ProfileData.twitter_link}
              />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please provide a description about yourself!",
                },
              ]}
            >
              <br />{" "}
              <Input.TextArea
                rows={4}
                className="wid"
                placeholder="Write a description about yourself"
                id="host_description"
                name="host_description"
                onChange={handleChangeInput}
                value={ProfileData.host_description}
                required
              />
            </Form.Item>
            <Form.Item
              label="Profile Image"
              name="profileImage"
               // Adding the required prop to make it mandatory
            >
        
     
            </Form.Item>
            <input
              id="host_profile_image"
              name="host_profile_image"
              type="file"
              
              className="sr-only"
              onChange={handleChangeInput}
              required
            />
            <button type="submit" className="submit-btn1">
              Submit
            </button>
          </form>
        </div>
        <Link to="/" className="back-link">
          Go back to Home Page
        </Link>
      </div>
      <div>
        <Footer />
      </div>
      <div className="copy"> Copyright @DHE 2024 </div>
    </div>
  );
};

export default ProfileHost;