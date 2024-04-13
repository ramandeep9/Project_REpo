import React, { useState } from 'react';
import Search from './Search';
import SearchResults from './SearchResults';
import './PageComponent.css';

// Define the SearchResult interface
interface SearchResult {
  name: string;
  type: string;
  address: string;
  website: string;
  directions: string;
}

const PageComponent: React.FC = () => {
  // Initialize search results state
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Define handleSearch function
  const handleSearch = (location: string) => {
    // Here, you would make an API call to fetch the search results based on the location
    // For now, let's assume some dummy data
    const dummyResults: SearchResult[] = [
      {
        name: 'Paragon Public School',
        type: 'School',
        address: '123 ABC Street, Mohali, Punjab',
        website: 'https://www.paragonpublicschool.com',
        directions: 'https://www.google.com/maps?q=123+ABC+Street,+Mohali,+Punjab',
      },
      {
        name: 'Paragon Public School',
        type: 'School',
        address: '123 ABC Street, Mohali, Punjab',
        website: 'https://www.paragonpublicschool.com',
        directions: 'https://www.google.com/maps?q=123+ABC+Street,+Mohali,+Punjab',
      },
      {
        name: 'Paragon Public School',
        type: 'School',
        address: '123 ABC Street, Mohali, Punjab',
        website: 'https://www.paragonpublicschool.com',
        directions: 'https://www.google.com/maps?q=123+ABC+Street,+Mohali,+Punjab',
      },
      {
        name: 'Paragon Public School',
        type: 'School',
        address: '123 ABC Street, Mohali, Punjab',
        website: 'https://www.paragonpublicschool.com',
        directions: 'https://www.google.com/maps?q=123+ABC+Street,+Mohali,+Punjab',
      },
      {
        name: 'Paragon Public School',
        type: 'School',
        address: '123 ABC Street, Mohali, Punjab',
        website: 'https://www.paragonpublicschool.com',
        directions: 'https://www.google.com/maps?q=123+ABC+Street,+Mohali,+Punjab',
      },
      {
        name: 'Paragon Public School',
        type: 'School',
        address: '123 ABC Street, Mohali, Punjab',
        website: 'https://www.paragonpublicschool.com',
        directions: 'https://www.google.com/maps?q=123+ABC+Street,+Mohali,+Punjab',
      },
      // Add more dummy data here if needed
    ];
    setSearchResults(dummyResults);
  };

  return (
    <div >
      <Search onSearch={handleSearch} />
      <div className="sresult">
      <SearchResults  results={searchResults} />
      </div>
    </div>
  );
};

export default PageComponent;
