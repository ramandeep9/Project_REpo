import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ReviewForm: React.FC = () => {
  const [review, setReview] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleChange9 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  const handleSubmit9 = () => {
    setShowMessage(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' , backgroundColor: 'beige'}}>
      <div style={{ textAlign: 'center' }}>
        <h2>Leave a Review</h2>
        <textarea
          rows={5}
          cols={50}
          placeholder="Write your review here..."
          value={review}
          onChange={handleChange9}
          style={{
            borderRadius: '5px',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #77AB59'
          }}
        />
        <br />
        <button
          onClick={handleSubmit9}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#77AB59',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Submit
        </button>
        {showMessage && (
          <div
            style={{
              marginTop: '20px',
              padding: '15px',
              backgroundColor: 'beige',
              borderRadius: '5px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              animation: 'fadeInOut 2s ease-in-out forwards',
            }}
          >
            <p style={{ fontSize: '18px', color: '#77AB59' }}>Thank you for your valuable time!</p>
          </div>
        )}
        <style>
          {`
            @keyframes fadeInOut {
              0% {
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }
          `}
        </style> <Link to="/DashboardHost" className="back-link">Go back to Dashboard</Link>
      </div>
    </div>
  );
};

export default ReviewForm;




