import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import './tourist.css';

interface Tourist {
  name: string;
  country: string;
  state: string;
  city: string;
  qualification: string;
  isActive: boolean;
  latitude?: number;
  longitude?: number;
}

const tourists: Tourist[] = [
  {
    name: "John Doe",
    country: "India",
    state: "Himachal Pradesh",
    city: "Shimla",
    qualification: "Bachelor's Degree",
    isActive: true,
    latitude: 31.1048,
    longitude: 77.1734
  },
  {
    name: "Dr Sudesh Sandhu",
    country: "India",
    state: "Himachal Pradesh",
    city: "Manali",
    qualification: "PHD",
    isActive: true,
    latitude: 32.2396,
    longitude: 77.1887
  },
  {
    name: "Jane Kohli",
    country: "India",
    state: "Jammu and Kashmir",
    city: "Srinagar",
    qualification: "Master's Degree",
    isActive: false,
    latitude: 34.0837,
    longitude: 74.7973
  },
  {
    name: "Manpreet Kaur",
    country: "India",
    state: "Punjab",
    city: "Mohali",
    qualification: "Master's Degree",
    isActive: true,
    latitude: 30.7046,
    longitude: 76.7179
  },
  {
    name: "parmish verma",
    country: "India",
    state: "Punjab",
    city: "Amritsar",
    qualification: "Master's Degree",
    isActive: false,
    latitude: 31.6340,
    longitude: 74.8723
  },
  {
    name: "jasmeen",
    country: "India",
    state: "Punjab",
    city: "Tarn-Taran",
    qualification: "Master's Degree",
    isActive: true,
    latitude: 31.4514,
    longitude: 74.9254
  },
  // Add more tourists here
];

const TouristAvailabilityPage: React.FC = () => {
  const [countrySearchTerm, setCountrySearchTerm] = useState<string>("");
  const [stateSearchTerm, setStateSearchTerm] = useState<string>("");
  const [citySearchTerm, setCitySearchTerm] = useState<string>("");
  const [searchLocation, setSearchLocation] = useState<{ lat: number; lng: number } | null>(null);

  const handleCountrySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountrySearchTerm(e.target.value);
  };

  const handleStateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateSearchTerm(e.target.value);
  };

  const handleCitySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCitySearchTerm(e.target.value);
  };

  const getLocation = async () => {
    const location = `${citySearchTerm}, ${stateSearchTerm}, ${countrySearchTerm}`;
    const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
      params: {
        q: location,
        format: 'json'
      }
    });
    const results = response.data;
    if (results.length > 0) {
      const { lat, lon } = results[0];
      setSearchLocation({ lat: parseFloat(lat), lng: parseFloat(lon) });
    }
  };

  const haversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const filteredTourists = tourists.filter(tourist => {
    if (citySearchTerm && searchLocation) {
      if (tourist.latitude && tourist.longitude) {
        const distance = haversineDistance(
          searchLocation.lat,
          searchLocation.lng,
          tourist.latitude,
          tourist.longitude
        );
        return distance <= 100;
      }
      return false;
    }
    if (stateSearchTerm) {
      return tourist.state.toLowerCase().includes(stateSearchTerm.toLowerCase()) &&
             tourist.country.toLowerCase().includes(countrySearchTerm.toLowerCase());
    }
    if (countrySearchTerm) {
      return tourist.country.toLowerCase().includes(countrySearchTerm.toLowerCase());
    }
    return true;
  });

  useEffect(() => {
    if (citySearchTerm) {
      getLocation();
    }
  }, [citySearchTerm]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div>
      <nav style={{
        backgroundColor: "#F5F5F5",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd"
      }} className="cmt">
        <h1 style={{
          color: "#333",
          fontSize: "24px",
          letterSpacing: "2px",
          margin: 10
        }}>Available Tourists</h1>
        <div style={{ display: "flex", alignItems: "center" }} className="cmt">
          <input
            type="text"
            className="at1"
            placeholder="Search by country..."
            value={countrySearchTerm}
            onChange={handleCountrySearch}
            style={{
              padding: "10px",
              width: "200px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginRight: "10px",
              fontSize: "16px",
              backgroundColor: "#fff",
              color: "#333"
            }}
          />
          <input
            type="text"
            className="at1"
            placeholder="Search by state..."
            value={stateSearchTerm}
            onChange={handleStateSearch}
            style={{
              padding: "10px",
              width: "200px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginRight: "10px",
              fontSize: "16px",
              backgroundColor: "#fff",
              color: "#333"
            }}
          />
          <input
            type="text"
            className="at1"
            placeholder="Search by city..."
            value={citySearchTerm}
            onChange={handleCitySearch}
            style={{
              padding: "10px",
              width: "200px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginRight: "10px",
              fontSize: "16px",
              backgroundColor: "#fff",
              color: "#333"
            }}
          />
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: "20px", color: "#666" }} className="srachicon" />
        </div>
      </nav>
      <div style={{ backgroundColor: "#F5F5F5", padding: "50px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          {filteredTourists.map((tourist, index) => (
            <div key={index} style={{
              backgroundColor: "#fff",
              color: "#333",
              padding: "20px",
              margin: "20px",
              width: "300px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              cursor: "pointer",
              overflow: "hidden"
            }}>
              <FontAwesomeIcon icon={tourist.isActive ? faCheckCircle : faTimesCircle} style={{
                fontSize: "36px",
                marginBottom: "10px",
                color: tourist.isActive ? "#45a049" : "#e74c3c",
                transition: "color 0.3s ease-in-out"
              }} />
              <h2 style={{
                fontSize: "24px",
                marginBottom: "10px",
                transition: "color 0.3s ease-in-out"
              }}>{tourist.name}</h2>
              <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>Qualification: {tourist.qualification}</p>
              <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>Country: {tourist.country}</p>
              <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>State: {tourist.state}</p>
              <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>City: {tourist.city}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TouristAvailabilityPage;
