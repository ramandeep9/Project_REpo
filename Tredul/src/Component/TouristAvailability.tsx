import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
// import "./tourist.css";

interface Tourist {
  name: string;
  location: string;
  qualification: string;
  isActive: boolean;
}

const tourists: Tourist[] = [
  {
    name: "John Doe",
    location: "Himachal Pradesh",
    qualification: "Bachelor's Degree",
    isActive: true,
  },
  {
    name: "Dr sudesh sandhu",
    location: "Himachal Pradesh",
    qualification: "PHD",
    isActive: true,
  },
  {
    name: "Jane Kohli",
    location: "Kashmir",
    qualification: "Master's Degree",
    isActive: false,
  },
  {
    name: "Manpreet Kaur",
    location: "Mohali",
    qualification: "Master's Degree",
    isActive: true,
  },
  {
    name: "SK Verma",
    location: "Tokyo",
    qualification: "Master's Degree",
    isActive: false,
  },
  // Add more tourists here
];

const TouristAvailabilityPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredTourists = tourists.filter(tourist =>
    tourist.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <nav style={{ backgroundColor: "#F5F5F5", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ddd" }}  className="input211">
        <h1 style={{ color: "#333", fontSize: "24px", letterSpacing: "2px", margin: 0 }} className="mnn">Available Tourists</h1>
        <div style={{ display: "flex", alignItems: "center" }} className="input21">
          <input
            type="text"
            placeholder="Search by location..."
            value={searchTerm}
            onChange={handleSearch}
            style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc", marginRight: "10px", fontSize: "16px", backgroundColor: "#fff", color: "#333" }}
          />
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: "20px", color: "#666" }} />
        </div>
      </nav>
      <div style={{ backgroundColor: "#F5F5F5", padding: "50px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          {filteredTourists.map((tourist, index) => (
            <div key={index} style={{ backgroundColor: "#fff", color: "#333", padding: "20px", margin: "20px", width: "300px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease-in-out", cursor: "pointer", overflow: "hidden" }}>
              <FontAwesomeIcon icon={tourist.isActive ? faCheckCircle : faTimesCircle} style={{ fontSize: "36px", marginBottom: "10px", color: tourist.isActive ? "#45a049" : "#e74c3c", transition: "color 0.3s ease-in-out" }} />
              <h2 style={{ fontSize: "24px", marginBottom: "10px", transition: "color 0.3s ease-in-out" }}>{tourist.name}</h2>
              <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>Location: {tourist.location}</p>
              <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>Qualification: {tourist.qualification}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TouristAvailabilityPage;