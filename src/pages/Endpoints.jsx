import { useState } from "react";
import animalEndpoints from "../assets/images/animal-endpoints.png";
import userEndpoints from "../assets/images/user-endpoints.png";
import clinicEndpoints from "../assets/images/clinic-endpoints.png";
import securityEndpoints from "../assets/images/security-endpoints.png";
import adminEndpoints from "../assets/images/admin-endpoints.png";
import Table from "../components/Table";

function Endpoints() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Endpoints</h1>
      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        This is an overview of REST API endpoints, organized by their function.
      </p>
      <Table />

      <div style={{ border: "1px solid #ddd", borderRadius: "5px", overflow: "hidden" }}>
        {/* Animals Section */}
        <div style={{ borderTop: "1px solid #ddd" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              cursor: "pointer",
              background: "#f9f9f9",
            }}
            onClick={() => toggleSection("animals")}
          >
            <h2 style={{ margin: 0 }}>Animals</h2>
            <span>{activeSection === "animals" ? "-" : "+"}</span>
          </div>
          {activeSection === "animals" && (
            <div style={{ padding: "15px", background: "#fff" }}>
              <img
                src={animalEndpoints}
                alt="Animals Endpoints"
                style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 auto" }}
              />
            </div>
          )}
        </div>

        {/* Users Section */}
        <div style={{ borderTop: "1px solid #ddd" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              cursor: "pointer",
              background: "#f9f9f9",
            }}
            onClick={() => toggleSection("users")}
          >
            <h2 style={{ margin: 0 }}>Users</h2>
            <span>{activeSection === "users" ? "-" : "+"}</span>
          </div>
          {activeSection === "users" && (
            <div style={{ padding: "15px", background: "#fff" }}>
              <img
                src={userEndpoints}
                alt="Users Endpoints"
                style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 auto" }}
              />
            </div>
          )}
        </div>

        {/* Clinics Section */}
        <div style={{ borderTop: "1px solid #ddd" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              cursor: "pointer",
              background: "#f9f9f9",
            }}
            onClick={() => toggleSection("clinics")}
          >
            <h2 style={{ margin: 0 }}>Veterinary Clinics</h2>
            <span>{activeSection === "clinics" ? "-" : "+"}</span>
          </div>
          {activeSection === "clinics" && (
            <div style={{ padding: "15px", background: "#fff" }}>
              <img
                src={clinicEndpoints}
                alt="Veterinary Clinics Endpoints"
                style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 auto" }}
              />
            </div>
          )}
        </div>

        {/* Security Section */}
        <div style={{ borderTop: "1px solid #ddd" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              cursor: "pointer",
              background: "#f9f9f9",
            }}
            onClick={() => toggleSection("security")}
          >
            <h2 style={{ margin: 0 }}>Security</h2>
            <span>{activeSection === "security" ? "-" : "+"}</span>
          </div>
          {activeSection === "security" && (
            <div style={{ padding: "15px", background: "#fff" }}>
              <img
                src={securityEndpoints}
                alt="Security Endpoints"
                style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 auto" }}
              />
            </div>
          )}
        </div>

        {/* Admin Section */}
        <div style={{ borderTop: "1px solid #ddd" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              cursor: "pointer",
              background: "#f9f9f9",
            }}
            onClick={() => toggleSection("admin")}
          >
            <h2 style={{ margin: 0 }}>Admin</h2>
            <span>{activeSection === "admin" ? "-" : "+"}</span>
          </div>
          {activeSection === "admin" && (
            <div style={{ padding: "15px", background: "#fff" }}>
              <img
                src={adminEndpoints}
                alt="Admin Endpoints"
                style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 auto" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Endpoints;
