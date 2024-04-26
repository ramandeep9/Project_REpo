import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import './profilecompletion.css';
import React, { useState } from 'react';
import Axios from 'axios';
import { toast,Toaster } from 'react-hot-toast';

const ProfileCompletion: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptions, setSelectedOptions] = useState('');

  const [ProfileData, setProfileData] = useState({
    tourist_name: '',
    contact_info: '',
    email_address: '',
    nationality: '',
    accommodation_preferences: '',
    higher_qualification: '',
    preferred_language: '',
    dietary_restrictions: '',
    emergency_contact_info: '',
    instagram_link: '',
    facebook_link: '',
    linkedin_link: '',
    twitter_link: '',
  });

  const handleChange3 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption3(event.target.value);
    setProfileData((prevData) => ({
      ...prevData,
      accommodation_preferences: event.target.value, // Update the corresponding field in ProfileData
    }));
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setProfileData((prevData) => ({
      ...prevData,
      higher_qualification: event.target.value, // Update the corresponding field in ProfileData
    }));
  };
  
  const handleChanges = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions(event.target.value);
    setProfileData((prevData) => ({
      ...prevData,
      preferred_language: event.target.value, // Update the corresponding field in ProfileData
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedProfileData = {
        ...ProfileData,
        accommodation_preferences: selectedOption3,
        higher_qualification: selectedOption,
        preferred_language: selectedOptions
      };
      const response = await fetch('http://localhost:8080/tourist/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProfileData)
      });

      if (response.ok) {
        // Handle success, e.g., show a success message to the user
        toast.success('Tourist Profile Setup Successfully!')
        navigate("/DashboardTour")
        console.log('Tourist Profile Setup Successfully')
      } else {
        // Handle error, e.g., show an error message to the user
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
    finally {
      setLoading(false); // Set loading to false after the request completes
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="profile-us-container">
        <h2 className="profile-us-header">
          Profile <span className="Touchcolor1">Setup</span>
        </h2>

        <h3 className="profile-us-innerheader">Wrap up your deets and hit the finish line!</h3>
        <div className="profile-form-container">
          {loading ? (
            <div>Loading...</div>
          ) : (
          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="profileform-group">
              <h3 className="nm2">
                Name<span style={{ color: 'green' }}>*</span>
              </h3>
              <input
                type="text"
                className="inputt"
                id="name1"
                name="tourist_name"
                value={ProfileData.tourist_name}
                onChange={handleChangeInput}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="profileform-group">
              <h3 className="nm2">
                Mobile No.<span style={{ color: 'green' }}>*</span>
              </h3>
              <input
                className="inputt"
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
              <h3 className="nm2">Email<span style={{ color: 'green' }}>*</span></h3>
              <input
                className="inputt"
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
              <h3 className="nm2">Nationality<span style={{ color: 'green' }}>*</span></h3>
              <input
                className="inputt"
                type="text"
                id="nationality"
                name="nationality"
                value='Indian'
                onChange={handleChangeInput}
                placeholder="Indian"
                required
              />
            </div>
            <div className="profileform-group">
              <h3 className="nm2">Accomodation Preferences <span style={{ color: 'green' }}>*</span></h3>
              <div>
                <select
                  id="dropdown1"
                  value={selectedOption3}
                  onChange={handleChange3}
                  className="inputt"
                  required
                >
                  <option value=""> Choose Yes/No</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div className="profileform-group">
              <h3 className="nm2">Highest Qualification <span style={{ color: 'green' }}>*</span></h3>
              <div>
                <select
                  id="dropdown1"
                  value={selectedOption}
                  onChange={handleChange}
                  className="inputt"
                  required
                >
                  <option value="">-- Choose Highest Qualification--</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="Doctorate or higher">Doctorate or higher</option>
                </select>
              </div>
            </div>
            <div className="profileform-group">
              <h3 className="nm2">
                Language Proficiency <span style={{ color: 'green' }}>*</span>
              </h3>
              <div>
                <select
                  id="dropdown1"
                  value={selectedOptions}
                  onChange={handleChanges}
                  className="inputt"
                  required
                >
            <option value="">-- Choose Language--</option>
            <option value="Afrikaans">Afrikaans</option>
            <option value="Albanian">Albanian</option>
            <option value="Arabic">Arabic</option>
            <option value="Armenian">Armenian</option>
            <option value="Basque">Basque</option>
            <option value="Bengali">Bengali</option>
            <option value="Bulgarian">Bulgarian</option>
            <option value="Catalan">Catalan</option>
            <option value="Cambodian">Cambodian</option>
            <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
            <option value="Croatian">Croatian</option>
            <option value="Czech">Czech</option>
            <option value="Danish">Danish</option>
            <option value="Dutch">Dutch</option>
            <option value="English">English</option>
            <option value="Estonian">Estonian</option>
            <option value="Fiji">Fiji</option>
            <option value="Finnish">Finnish</option>
            <option value="French">French</option>
            <option value="Georgian">Georgian</option>
            <option value="German">German</option>
            <option value="Greek">Greek</option>
            <option value="Gujarati">Gujarati</option>
            <option value="Hebrew">Hebrew</option>
            <option value="Hindi">Hindi</option>
            <option value="Hungarian">Hungarian</option>
            <option value="Icelandic">Icelandic</option>
            <option value="Indonesian">Indonesian</option>
            <option value="Irish">Irish</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Javanese">Javanese</option>
            <option value="Korean">Korean</option>
            <option value="Latin">Latin</option>
            <option value="Latvian">Latvian</option>
            <option value="Lithuanian">Lithuanian</option>
            <option value="Macedonian">Macedonian</option>
            <option value="Malay">Malay</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Maltese">Maltese</option>
            <option value="Maori">Maori</option>
            <option value="Marathi">Marathi</option>
            <option value="Mongolian">Mongolian</option>
            <option value="Nepali">Nepali</option>
            <option value="Norwegian">Norwegian</option>
            <option value="Persian">Persian</option>
            <option value="Polish">Polish</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Quechua">Quechua</option>
            <option value="Romanian">Romanian</option>
            <option value="Russian">Russian</option>
            <option value="Samoan">Samoan</option>
            <option value="Serbian">Serbian</option>
            <option value="Slovak">Slovak</option>
            <option value="Slovenian">Slovenian</option>
            <option value="Spanish">Spanish</option>
            <option value="Swahili">Swahili</option>
            <option value="Swedish">Swedish</option>
            <option value="Tamil">Tamil</option>
            <option value="Tatar">Tatar</option>
            <option value="Telugu">Telugu</option>
            <option value="Thai">Thai</option>
            <option value="Tibetan">Tibetan</option>
            <option value="Tonga">Tonga</option>
            <option value="Turkish">Turkish</option>
            <option value="Ukrainian">Ukrainian</option>
            <option value="Urdu">Urdu</option>
            <option value="Uzbek">Uzbek</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Welsh">Welsh</option>
            <option value="Xhosa">Xhosa</option>

      </select>
              </div>
            </div>
            <div className="profileform-group">
              <h3 className="nm2">Dietary Restrictions (if any)</h3>
              <input
                className="inputt"
                type="text"
                id="dietary_restrictions"
                name="dietary_restrictions"
                value={ProfileData.dietary_restrictions}
                onChange={handleChangeInput}
                placeholder="If any"
              />
            </div>
            <div className="profileform-group">
              <h3 className="nm2">Emergency Contact Information<span style={{ color: 'green' }}>*</span></h3>
              <input
                className="inputt"
                type="tel"
                id="emergency_contact_info"
                name="emergency_contact_info"
                value={ProfileData.emergency_contact_info}
                onChange={handleChangeInput}
                placeholder="Enter Mobile Number"
                required
              />
            </div>
            <div className="profileform-group">
              <h3 className="nm2">Instagram Link</h3>
              <input
                className="inputt"
                type="text"
                id="instagram_link"
                name="instagram_link"
                value={ProfileData.instagram_link}
                onChange={handleChangeInput}
                placeholder="Paste Link Here"
              />
            </div>
            <div className="profileform-group">
              <h3 className="nm2">Facebook Link</h3>
              <input
                className="inputt"
                type="text"
                id="facebook_link"
                name="facebook_link"
                value={ProfileData.facebook_link}
                onChange={handleChangeInput}
                placeholder="Paste Link Here"
              />
            </div>
            <div className="profileform-group">
              <h3 className="nm2">Twitter Link</h3>
              <input
                className="inputt"
                type="text"
                id="twitter_link"
                name="twitter_link"
                value={ProfileData.twitter_link}
                onChange={handleChangeInput}
                placeholder="Paste Link Here"
              />
            </div>
            <div className="profileform-group">
              <h3 className="nm2">Linkedin Link</h3>
              <input
                className="inputt"
                type="text"
                id="linkedin_link"
                name="linkedin_link"
                value={ProfileData.linkedin_link}
                onChange={handleChangeInput}
                placeholder="Paste Link Here"
              />
            </div>
            <button type="submit" className="submit-btn1">
              Submit

            </button>
            </form>
          )} 
        </div>
          
        <Link to="/" className="back-link">
          Go back to Home Page
        </Link>
      </div>
      <div>
        <Footer />
      </div>
      <div className="copy">Copyright @DHE 2024</div>
    </div>
          
  );
};
export default ProfileCompletion;
