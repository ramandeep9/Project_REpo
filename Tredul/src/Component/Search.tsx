import React, { useState } from 'react';
import './search.css';
interface SearchProps {
  onSearch: (location: string) => void;
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
    const location = `${city}, ${state}`;
    onSearch(location);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        className="state"
        placeholder="Enter state..."
        value={state}
        onChange={handleStateChange}
      />
      <input
        type="text"
        className="state"
        placeholder="Enter city..."
        value={city}
        onChange={handleCityChange}
      />
      <button type="submit" className="btn6">Search</button>
    </form>
  );
};

export default Search;
