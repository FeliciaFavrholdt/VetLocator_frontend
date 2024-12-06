import { useState } from "react";
import "./Endpoints.css";

// Import images explicitly
import animalEndpoints from "../assets/images/animal-endpoints.png";
import userEndpoints from "../assets/images/user-endpoints.png";
import clinicEndpoints from "../assets/images/clinic-endpoints.png";
import securityEndpoints from "../assets/images/security-endpoints.png";
import adminEndpoints from "../assets/images/admin-endpoints.png";

function Endpoints() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="endpoints-container">
      <h1>Endpoints</h1>
      <p>
        Her er en oversigt over REST API endpoints, organiseret efter deres
        funktion.
      </p>

      {/* Accordion Sections */}
      <div className="accordion">
        {/* Animals Section */}
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleSection("animals")}
          >
            <h2>Animals</h2>
            <span>{activeSection === "animals" ? "-" : "+"}</span>
          </div>
          {activeSection === "animals" && (
            <div className="accordion-content">
              <img src={animalEndpoints} alt="Animals Endpoints" />
            </div>
          )}
        </div>

        {/* Users Section */}
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleSection("users")}
          >
            <h2>Users</h2>
            <span>{activeSection === "users" ? "-" : "+"}</span>
          </div>
          {activeSection === "users" && (
            <div className="accordion-content">
              <img src={userEndpoints} alt="Users Endpoints" />
            </div>
          )}
        </div>

        {/* Clinics Section */}
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleSection("clinics")}
          >
            <h2>Veterinary Clinics</h2>
            <span>{activeSection === "clinics" ? "-" : "+"}</span>
          </div>
          {activeSection === "clinics" && (
            <div className="accordion-content">
              <img src={clinicEndpoints} alt="Veterinary Clinics Endpoints" />
            </div>
          )}
        </div>

        {/* Security Section */}
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleSection("security")}
          >
            <h2>Security</h2>
            <span>{activeSection === "security" ? "-" : "+"}</span>
          </div>
          {activeSection === "security" && (
            <div className="accordion-content">
              <img src={securityEndpoints} alt="Security Endpoints" />
            </div>
          )}
        </div>

        {/* Admin Section */}
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleSection("admin")}
          >
            <h2>Admin</h2>
            <span>{activeSection === "admin" ? "-" : "+"}</span>
          </div>
          {activeSection === "admin" && (
            <div className="accordion-content">
              <img src={adminEndpoints} alt="Admin Endpoints" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Endpoints;
