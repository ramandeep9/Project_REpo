
import React, { useState } from 'react';
import './search.css';

interface SearchProps {
  onSearch: (city: string, state: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(city, state); // Pass city and state values to onSearch function
  };

  return (
    <div className="hd">
      <form onSubmit={handleSubmit} className="search">
        <input
          type="text"
          className="state"
          placeholder="Enter city..."
          value={city}
          onChange={handleCityChange}
        />
        <input
          type="text"
          className="state"
          placeholder="Enter state..."
          value={state}
          onChange={handleStateChange}
        />
        <button type="submit" className="btn6">Search</button>
      </form>
    </div>
  );
};

export default Search;