import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import icon from '../asset/icon.png';
import icon2 from '../asset/reviewicon.png';
import closeIcon from '../asset/cross.jpg';
import icony from '../asset/mapicon.png';

interface SearchResult {
  name: string;
  type: string;
  address: string;
  website: string;
  directions: string;
}

interface SearchResultsProps {
  results: SearchResult[];
}

const btnStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  color: '#fff',
};

const btntextStyle = {
  color: '#fff',
};

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const [searched, setSearched] = useState(false);
  const [review, setReview] = useState<string>('');
  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);
  const [selectedResultIndex, setSelectedResultIndex] = useState<number | null>(null);

  const handleChange9 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  const handleSubmit9 = () => {
    if (!review.trim()) {
      toast.error('Please write your review before submitting.');
    } else {
      toast.success('Thank you for your valuable time!');
      setShowReviewForm(false); // Hide the review form after showing the alert
    }
  };

  useEffect(() => {
    setSearched(results.length > 0);
    console.log(results)
  }, [results]);

  return (
    <div className="rresultprop">
      {searched && results.length > 0 ? (
        results.map((result, index) => (
          <div key={index} className="ind">
            <div className="flexer">
              <div className="cyt">
                <h3 className="nam">{result.name}</h3>
                <h3 className="nam1">Type: {result.type} </h3>
                <br />
                Address: {result.address}
              </div>

              <div className="iconss">
                <a href={result.website} target="_blank" rel="noopener noreferrer" className="blk">
                  {' '}
                  <img className="myicon" alt="location" src={icon} />
                </a>
                <a href={result.directions} target="_blank" rel="noopener noreferrer">
                  <img className="myicon2" alt="location" src={icony} />
                </a>
                <a
                  onClick={() => {
                    setReview(''); // Reset the review text
                    setShowReviewForm(true);
                    setSelectedResultIndex(index); // Set the index of the selected result
                  }}
                  className="blk1"
                >
                  {' '}
                  <img className="myicon3" alt="location" src={icon2} />
                </a>
                {showReviewForm && selectedResultIndex === index && (
                  <>
                    <div style={{
                        position: 'fixed',
                        bottom: '10px',
                        right: '10px',
                        zIndex: 999,
                      }}>
                      <div
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          padding: '20px',
                          borderRadius: '10px',
                          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                          textAlign: 'center',
                        }}
                      >
                        <img
                          src={closeIcon}
                          alt="Close"
                          style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            cursor: 'pointer',
                            width: '20px',
                            height: '20px',
                          }}
                          onClick={() => setShowReviewForm(false)}
                        />
                        <h2>Leave a Review</h2>
                        <textarea
                          rows={5}
                          cols={20}
                          placeholder="Write your review here..."
                          value={review}
                          onChange={handleChange9}
                          style={{
                            borderRadius: '5px',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #77AB59',
                            width: '100%',
                            boxSizing: 'border-box',
                          }}
                        />
                        <br />
                        <button onClick={handleSubmit9} style={btnStyle}>
                          Submit
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <button className="botn" style={btnStyle}>
              <Link style={btntextStyle} to="/SchdeuleTime">
                Schedule
              </Link>
            </button>
          </div>
        ))
      ) : null}
      {searched && results.length === 0 && <h1>nothing to show here</h1>}
    </div>
  );
};

export default SearchResults;
