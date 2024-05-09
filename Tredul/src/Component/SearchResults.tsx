import React, { useState, useEffect } from 'react';
import icon from '../asset/icon.png';
import icony from '../asset/mapicon.png';
import { Link } from 'react-router-dom';


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
  color: '#fff ',
};
const btntextStyle = {
  color: '#fff ',
};

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    setSearched(results.length > 0);
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
                <a
                  href={result.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blk"
                >
                  {' '}
                  <img className="myicon" alt="location" src={icon} />
                </a>
                <a
                  href={result.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="myicon2" alt="location" src={icony} />
                </a>
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