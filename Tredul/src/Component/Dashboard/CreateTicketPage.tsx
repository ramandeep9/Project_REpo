// import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
// import { City, Country, State } from "country-state-city";

// interface CountryType {
//   isoCode: string;
//   name: string;
// }

// interface StateType {
//   isoCode: string;
//   name: string;
// }

// interface CityType {
//   name: string;
// }

// interface SelectorProps<T> {
//   data: T[];
//   selected: T | null;
//   setSelected: (item: T | null) => void;
//   placeholder: string;
// }

// const SelectorComponent = <T extends { name: string }>({
//   data,
//   selected,
//   setSelected,
//   placeholder
// }: SelectorProps<T>) => {
//   return (
//     <select
//       value={selected?.name || ""}
//       style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//       onChange={(e) => {
//         const selectedItem = data.find(item => item.name === e.target.value) || null;
//         setSelected(selectedItem);
//       }}
//     >
//       <option value="" disabled>{placeholder}</option>
//       {data.map((item) => (
//         <option key={item.name} value={item.name}>
//           {item.name}
//         </option>
//       ))}
//     </select>
//   );
// };

// const CreateTicketPage: React.FC = () => {
//   const [ticketDetails, setTicketDetails] = useState({
//     country: "",
//     state: "",
//     city: "",
//     fromDate: "",
//     toDate: "",
//     name: "",
//     qualification: ""
//   });

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setTicketDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8080/tourist/create-ticket", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(ticketDetails) // Sending ticketDetails as JSON
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to create ticket');
//       }
  
//       const data = await response.json();
//       console.log('Ticket created:', data);
//     } catch (error) {
//       console.error('Error while storing ticket in the database:', error);
//     }
//   };
  

//   const countryData: CountryType[] = Country.getAllCountries();
//   const [stateData, setStateData] = useState<StateType[]>([]);
//   const [cityData, setCityData] = useState<CityType[]>([]);

//   const [country, setCountry] = useState<CountryType | null>(null);
//   const [state, setState] = useState<StateType | null>(null);
//   const [city, setCity] = useState<CityType | null>(null);

//   useEffect(() => {
//     // Retrieve data from local storage
//     const storedProfileData = localStorage.getItem('profileData');
//     if (storedProfileData) {
//       const parsedData = JSON.parse(storedProfileData);
//       // Set name and qualification from local storage
//       setTicketDetails((prevDetails) => ({ ...prevDetails, name: parsedData.tourist_name, qualification: parsedData.higher_qualification }));
//     }
//   }, []);

//   useEffect(() => {
//     if (country) {
//       setStateData(State.getStatesOfCountry(country.isoCode));
//       setState(null);
//       setCity(null);
//       setTicketDetails(prevDetails => ({ ...prevDetails, country: country.name, state: "", city: "" }));
//     } else {
//       setStateData([]);
//     }
//   }, [country]);

//   useEffect(() => {
//     if (state) {
//       setCityData(City.getCitiesOfState(country?.isoCode || "", state.isoCode));
//       setCity(null);
//       setTicketDetails(prevDetails => ({ ...prevDetails, state: state.name, city: "" }));
//     } else {
//       setCityData([]);
//     }
//   }, [state, country?.isoCode]);

//   useEffect(() => {
//     if (city) {
//       setTicketDetails(prevDetails => ({ ...prevDetails, city: city.name }));
//     }
//   }, [city]);

//   return (
//     <div style={{ backgroundColor: "#263043", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
//       <div style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px", maxWidth: "600px", width: "100%" }}>
//         <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px", fontFamily: "Arial, sans-serif", letterSpacing: "2px" }}>Create a Ticket</h2>
//         <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//           <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//             <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>Name</label>
//             <input type="text" name="name" value={ticketDetails.name} readOnly style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//             <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>Qualification</label>
//             <input type="text" name="qualification" value={ticketDetails.qualification} readOnly style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
//           </div>

//           <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//             <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>Country</label>
//             <SelectorComponent
//               data={countryData}
//               selected={country}
//               setSelected={setCountry}
//               placeholder="Enter a country"
//             />
//           </div>

//           {stateData.length > 0 && (
//             <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//               <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>State</label>
//               <SelectorComponent
//                 data={stateData}
//                 selected={state}
//                 setSelected={setState}
//                 placeholder="Enter a state"
//               />
//             </div>
//           )}

//           {cityData.length > 0 && (
//             <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//               <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>City</label>
//               <SelectorComponent
//                 data={cityData}
//                 selected={city}
//                 setSelected={setCity}
//                 placeholder="Enter a city"
//               />
//             </div>
//           )}

//           <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//             <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>From Date</label>
//             <input type="date" name="fromDate" value={ticketDetails.fromDate} onChange={handleInputChange} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//             <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>To Date</label>
//             <input type="date" name="toDate" value={ticketDetails.toDate} onChange={handleInputChange} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
//           </div>
//           <button type="submit" style={{ padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#E9EAEC", color: "black", fontSize: "16px", cursor: "pointer", transition: "background-color 0.3s", marginTop: "10px", margin: "auto" }}>Create Ticket</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateTicketPage;

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { City, Country, State } from "country-state-city";

interface CountryType {
  isoCode: string;
  name: string;
}

interface StateType {
  isoCode: string;
  name: string;
}

interface CityType {
  name: string;
}

interface SelectorProps<T> {
  data: T[];
  selected: T | null;
  setSelected: (item: T | null) => void;
  placeholder: string;
}

const SelectorComponent = <T extends { name: string }>({
  data,
  selected,
  setSelected,
  placeholder
}: SelectorProps<T>) => {
  return (
    <select
      value={selected?.name || ""}
      style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      onChange={(e) => {
        const selectedItem = data.find(item => item.name === e.target.value) || null;
        setSelected(selectedItem);
      }}
    >
      <option value="" disabled>{placeholder}</option>
      {data.map((item) => (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

const CreateTicketPage: React.FC = () => {
  const [ticketDetails, setTicketDetails] = useState({
    country: "",
    state: "",
    city: "",
    fromDate: "",
    toDate: "",
    name: "",
    qualification: ""
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTicketDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/tourist/create-ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(ticketDetails) // Sending ticketDetails as JSON
      });
  
      if (!response.ok) {
        throw new Error('Failed to create ticket');
      }
  
      const data = await response.json();
      console.log('Ticket created:', data);
    } catch (error) {
      console.error('Error while storing ticket in the database:', error);
    }
  };
  

  const countryData: CountryType[] = Country.getAllCountries();
  const [stateData, setStateData] = useState<StateType[]>([]);
  const [cityData, setCityData] = useState<CityType[]>([]);

  const [country, setCountry] = useState<CountryType | null>(null);
  const [state, setState] = useState<StateType | null>(null);
  const [city, setCity] = useState<CityType | null>(null);

  useEffect(() => {
    // Retrieve data from local storage
    const storedProfileData = localStorage.getItem('profileData');
    if (storedProfileData) {
      const parsedData = JSON.parse(storedProfileData);
      // Set name and qualification from local storage
      setTicketDetails((prevDetails) => ({ ...prevDetails, name: parsedData.tourist_name, qualification: parsedData.higher_qualification }));
    }
  }, []);

  useEffect(() => {
    if (country) {
      setStateData(State.getStatesOfCountry(country.isoCode));
      setState(null);
      setCity(null);
      setTicketDetails(prevDetails => ({ ...prevDetails, country: country.name, state: "", city: "" }));
    } else {
      setStateData([]);
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      setCityData(City.getCitiesOfState(country?.isoCode || "", state.isoCode));
      setCity(null);
      setTicketDetails(prevDetails => ({ ...prevDetails, state: state.name, city: "" }));
    } else {
      setCityData([]);
    }
  }, [state, country?.isoCode]);

  useEffect(() => {
    if (city) {
      setTicketDetails(prevDetails => ({ ...prevDetails, city: city.name }));
    }
  }, [city]);

  return (
    <div style={{ backgroundColor: "#263043", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px", maxWidth: "600px", width: "100%" }}>
        <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px", fontFamily: "Arial, sans-serif", letterSpacing: "2px" }}>Create a Ticket</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>Name</label>
            <input type="text" name="name" value={ticketDetails.name} readOnly style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>Qualification</label>
            <input type="text" name="qualification" value={ticketDetails.qualification} readOnly style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>Country</label>
            <SelectorComponent
              data={countryData}
              selected={country}
              setSelected={setCountry}
              placeholder="Enter a country"
            />
          </div>

          {stateData.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>State</label>
              <SelectorComponent
                data={stateData}
                selected={state}
                setSelected={setState}
                placeholder="Enter a state"
              />
            </div>
          )}

          {cityData.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>City</label>
              <SelectorComponent
                data={cityData}
                selected={city}
                setSelected={setCity}
                placeholder="Enter a city"
              />
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>From Date</label>
            <input type="date" name="fromDate" value={ticketDetails.fromDate} onChange={handleInputChange} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>To Date</label>
            <input type="date" name="toDate" value={ticketDetails.toDate} onChange={handleInputChange} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <button type="submit" style={{ padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#E9EAEC", color: "black", fontSize: "16px", cursor: "pointer", transition: "background-color 0.3s", marginTop: "10px", margin: "auto" }}>Create Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTicketPage;
