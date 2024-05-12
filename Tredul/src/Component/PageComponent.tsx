
import React, { useState } from 'react';
import Search from './Search';
import SearchResults from './SearchResults';
import './PageComponent.css';
import axios from 'axios';
import { message } from 'antd';


// Define the SearchResult interface
interface SearchResult {
  name: string;
  type: string;
  address: string;
  website: string;
  directions: string;
}

const PageComponent: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = async (city: string, state: string) => {
    try {
      const response = await axios.get(`https://tredul-backend.vercel.app/api/host/search?city=${city}&state=${state}`);
      setSearchResults(response.data);
      console.log(response.data,"search",SearchResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
      message.error('Error fetching search results');
    }
  };

  return (
    <div className="handlesearch">
      <Search onSearch={handleSearch} />
      <div className="sresult">
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
};

export default PageComponent;