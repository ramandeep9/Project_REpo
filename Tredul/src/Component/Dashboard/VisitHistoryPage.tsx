// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt, faCalendarAlt, faUserCircle, faCog, faHome, faInfoCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom"; // Updated to use useNavigate

// interface Visit {
//   id: number;
//   name: string;
//   country: string;
//   state: string;
//   city: string;
//   visitDate: string;
// }

// const visitHistoryData: Visit[] = [
//   { id: 1, name: "Shimla Tour", country: "India", state: "Himachal Pradesh", city: "Shimla", visitDate: "2024-01-20" },
//   { id: 2, name: "Manali Adventure", country: "India", state: "Himachal Pradesh", city: "Manali", visitDate: "2024-02-15" },
//   { id: 3, name: "Srinagar Serenity", country: "India", state: "Jammu and Kashmir", city: "Srinagar", visitDate: "2024-03-10" },
//   // Add more visit history data here
// ];

// const VisitHistoryPage: React.FC = () => {
//   const [visitHistory, setVisitHistory] = useState<Visit[]>([]);
//   const navigate = useNavigate(); // For navigation

//   useEffect(() => {
//     // Simulate fetching visit history data
//     setVisitHistory(visitHistoryData);
//   }, []);

//   return (
//     <div>
//       <nav style={{
//         backgroundColor: "#F5F5F5",
//         padding: "20px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         borderBottom: "1px solid #ddd"
//       }}>
//         <div style={{ display: "flex", alignItems: "center" }}>
         
//           <h1 style={{
//             color: "#333",
//             fontSize: "24px",
//             letterSpacing: "2px",
//             margin: 0
//           }}>Visit History</h1>
//         </div>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <FontAwesomeIcon icon={faHome} style={{
//             fontSize: "24px",
//             color: "#333",
//             marginRight: "20px",
//             cursor: "pointer",
//             transition: "color 0.3s"
//           }}
//           onClick={() => navigate('/')}
//           onMouseEnter={(e) => (e.currentTarget.style.color = "#45a049")}
//           onMouseLeave={(e) => (e.currentTarget.style.color = "#333")} />
//           <FontAwesomeIcon icon={faInfoCircle} style={{
//             fontSize: "24px",
//             color: "#333",
//             marginRight: "20px",
//             cursor: "pointer",
//             transition: "color 0.3s"
//           }}
//           onClick={() => navigate('/about')}
//           onMouseEnter={(e) => (e.currentTarget.style.color = "#45a049")}
//           onMouseLeave={(e) => (e.currentTarget.style.color = "#333")} />
//           <FontAwesomeIcon icon={faEnvelope} style={{
//             fontSize: "24px",
//             color: "#333",
//             marginRight: "20px",
//             cursor: "pointer",
//             transition: "color 0.3s"
//           }}
//           onClick={() => navigate('/contact')}
//           onMouseEnter={(e) => (e.currentTarget.style.color = "#45a049")}
//           onMouseLeave={(e) => (e.currentTarget.style.color = "#333")} />
         
//         </div>
//       </nav>
//       <div style={{ backgroundColor: "#F5F5F5", padding: "50px", textAlign: "center" }}>
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
//           {visitHistory.map((visit) => (
//             <div key={visit.id} style={{
//               backgroundColor: "#fff",
//               color: "#333",
//               padding: "20px",
//               margin: "20px",
//               width: "300px",
//               borderRadius: "10px",
//               boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
//               transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
//               cursor: "pointer",
//               overflow: "hidden"
//             }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
//               (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLElement).style.transform = "scale(1)";
//               (e.currentTarget as HTMLElement).style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
//             }}>
//               <FontAwesomeIcon icon={faMapMarkerAlt} style={{
//                 fontSize: "36px",
//                 marginBottom: "10px",
//                 color: "#45a049",
//                 transition: "color 0.3s ease-in-out"
//               }} />
//               <h2 style={{
//                 fontSize: "24px",
//                 marginBottom: "10px",
//                 transition: "color 0.3s ease-in-out"
//               }}>{visit.name}</h2>
//               <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>Country: {visit.country}</p>
//               <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>State: {visit.state}</p>
//               <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>City: {visit.city}</p>
//               <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>
//                 <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: "5px" }} />
//                 Visit Date: {visit.visitDate}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisitHistoryPage;
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendarAlt, faHome, faInfoCircle, faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface Visit {
  id: number;
  name: string;
  country: string;
  state: string;
  city: string;
  visitDate: string;
  visitCount: number;
}

const visitHistoryData: Visit[] = [
  { id: 1, name: "Shimla Tour", country: "India", state: "Himachal Pradesh", city: "Shimla", visitDate: "2024-01-20", visitCount: 3 },
  { id: 2, name: "Manali Adventure", country: "India", state: "Himachal Pradesh", city: "Manali", visitDate: "2024-02-15", visitCount: 2 },
  { id: 3, name: "Srinagar Serenity", country: "India", state: "Jammu and Kashmir", city: "Srinagar", visitDate: "2024-03-10", visitCount: 1 },
  // Add more visit history data here
];

const VisitHistoryPage: React.FC = () => {
  const [visitHistory, setVisitHistory] = useState<Visit[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setVisitHistory(visitHistoryData);
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
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{
            color: "#333",
            fontSize: "24px",
            letterSpacing: "2px",
            margin: 0
          }}>Visit History</h1>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon icon={faHome} style={{
            fontSize: "24px",
            color: "#333",
            marginRight: "20px",
            cursor: "pointer",
            transition: "color 0.3s"
          }}
          onClick={() => navigate('/')}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#45a049")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#333")} />
          <FontAwesomeIcon icon={faInfoCircle} style={{
            fontSize: "24px",
            color: "#333",
            marginRight: "20px",
            cursor: "pointer",
            transition: "color 0.3s"
          }}
          onClick={() => navigate('/about')}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#45a049")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#333")} />
          <FontAwesomeIcon icon={faEnvelope} style={{
            fontSize: "24px",
            color: "#333",
            marginRight: "20px",
            cursor: "pointer",
            transition: "color 0.3s"
          }}
          onClick={() => navigate('/contact')}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#45a049")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#333")} />
        </div>
      </nav>
      <div style={{ backgroundColor: "#F5F5F5", padding: "50px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          {visitHistory.map((visit) => (
            <div key={visit.id} style={{
              position: "relative",
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
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
            }}>
              <div style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "#45a049",
                color: "#fff",
                borderRadius: "50%",
                width: "30px", // Adjusted size
                height: "30px", // Adjusted size
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px", // Adjusted font size
                fontWeight: "bold"
              }}>
                 {visit.visitCount}
              </div>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{
                fontSize: "36px",
                marginBottom: "10px",
                color: "#45a049",
                transition: "color 0.3s ease-in-out"
              }} />
              <h2 style={{
                fontSize: "24px",
                marginBottom: "10px",
                transition: "color 0.3s ease-in-out"
              }}>{visit.name}</h2>
              <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>Country: {visit.country}</p>
              <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>State: {visit.state}</p>
              <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>City: {visit.city}</p>
              <p style={{ fontSize: "18px", marginBottom: "5px", transition: "color 0.3s ease-in-out" }}>
                <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: "5px" }} />
                Visit Date: {visit.visitDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitHistoryPage;
