// import React, { useState,useEffec } from 'react';
// import './search.css';
// import axios from  'axios';

// interface SearchProps {
//   onSearch: (location: string) => void;
// }

// const Search: React.FC<SearchProps> = ({ onSearch }) => {
//   const [state, setState] = useState<string>('');
//   const [city, setCity] = useState<string>('');

//   const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setState(event.target.value);
//   };

//   const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCity(event.target.value);
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     const location = `${city}, ${state}`;
//     onSearch(location);
//   };
//   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/host/search");
//         console.log(response.data);
//         setSearchResults(response.data);
//         console.log(response.data,"data");
//         console.log( "jfdjk")
//         alert("done")
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//         alert(error)
//       }
//     };

//     fetchData();
//   }, []); 


//   return (
//     <div className="hd">
//     <form onSubmit={handleSubmit} className="search">
//       <input
//         type="text"
//         className="state"
//         placeholder="Enter city..."
//         value={city}
//         onChange={handleCityChange}
//       />
//       <input
//         type="text"
//         className="state"
//         placeholder="Enter state..."
//         value={state}
//         onChange={handleStateChange}
//       />
//       <button type="submit" className="btn6">Search</button>
//     </form></div>
//   );
// };

// export default Search;



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
