import React, { useState } from 'react';
import './ShareExperience.css';
import axios from 'axios';


const ShareExperience: React.FC = () => {
  const [videoLink, setVideoLink] = useState<string>('');
  const [audioLink, setAudioLink] = useState<string>('');
  const [textMessage, setTextMessage] = useState<string>('');

  const handleVideoSubmit = () => {
    console.log('Video link submitted:', videoLink);
    saveToBackend('video', videoLink);
  };

  const handleAudioSubmit = () => {
    console.log('Audio link submitted:', audioLink);
    saveToBackend('audio', audioLink);
  };

  const handleTextSubmit = () => {
    console.log('Text message submitted:', textMessage);
    saveToBackend('text', textMessage);
  };

  const saveToBackend = (type: string, content: string) => {
    // Example: POST request to your backend API endpoint
    axios.post('your-backend-api-endpoint', {
      type: type,
      content: content,
    })
    .then((response: any) => {
      console.log("Data successfully sent to backend!", response.data);
    })
    .catch((error: any) => {

      console.error("Error sending data to backend:", error);
    });
  };

  return (
    <div className="share-experience">
      <h2 className="head1">Share Your Experience</h2>
      <div className="share-options">
        <div className="share-option">
          <h3>Share Video</h3>
          <input
            type="text"
            placeholder="Paste video link here"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
          <button onClick={handleVideoSubmit} className="btm1">Submit</button>
        </div>
        <div className="share-option">
          <h3>Share Audio</h3>
          <input
            type="text"
            placeholder="Paste audio link here"
            value={audioLink}
            onChange={(e) => setAudioLink(e.target.value)}
          />
          <button onClick={handleAudioSubmit} className="btm1">Submit</button>
        </div>
        <div className="share-option">
          <h3>Share Text Message</h3>
          <textarea
            placeholder="Type your message here"
            value={textMessage}
            onChange={(e) => setTextMessage(e.target.value)}
          ></textarea>
          <button onClick={handleTextSubmit} className="btm1">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ShareExperience;


