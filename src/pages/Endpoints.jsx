import { useState } from "react";
import styled from "styled-components";
import animalEndpoints from "../assets/images/animal-endpoints.png";
import userEndpoints from "../assets/images/user-endpoints.png";
import clinicEndpoints from "../assets/images/clinic-endpoints.png";
import securityEndpoints from "../assets/images/security-endpoints.png";
import adminEndpoints from "../assets/images/admin-endpoints.png";

const EndpointsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 40px;
`;

const Accordion = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

const AccordionItem = styled.div`
  border-top: 1px solid #ddd;
`;

const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  background: #f9f9f9;

  &:hover {
    background: #f1f1f1;
  }
`;

const AccordionContent = styled.div`
  padding: 15px;
  background: #fff;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

function Endpoints() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <EndpointsContainer>
      <Title>Endpoints</Title>
      <Description>
        Her er en oversigt over REST API endpoints, organiseret efter deres
        funktion.
      </Description>

      {/* Accordion Sections */}
      <Accordion>
        {/* Animals Section */}
        <AccordionItem>
          <AccordionTitle onClick={() => toggleSection("animals")}>
            <h2>Animals</h2>
            <span>{activeSection === "animals" ? "-" : "+"}</span>
          </AccordionTitle>
          {activeSection === "animals" && (
            <AccordionContent>
              <StyledImage src={animalEndpoints} alt="Animals Endpoints" />
            </AccordionContent>
          )}
        </AccordionItem>

        {/* Users Section */}
        <AccordionItem>
          <AccordionTitle onClick={() => toggleSection("users")}>
            <h2>Users</h2>
            <span>{activeSection === "users" ? "-" : "+"}</span>
          </AccordionTitle>
          {activeSection === "users" && (
            <AccordionContent>
              <StyledImage src={userEndpoints} alt="Users Endpoints" />
            </AccordionContent>
          )}
        </AccordionItem>

        {/* Clinics Section */}
        <AccordionItem>
          <AccordionTitle onClick={() => toggleSection("clinics")}>
            <h2>Veterinary Clinics</h2>
            <span>{activeSection === "clinics" ? "-" : "+"}</span>
          </AccordionTitle>
          {activeSection === "clinics" && (
            <AccordionContent>
              <StyledImage src={clinicEndpoints} alt="Veterinary Clinics Endpoints" />
            </AccordionContent>
          )}
        </AccordionItem>

        {/* Security Section */}
        <AccordionItem>
          <AccordionTitle onClick={() => toggleSection("security")}>
            <h2>Security</h2>
            <span>{activeSection === "security" ? "-" : "+"}</span>
          </AccordionTitle>
          {activeSection === "security" && (
            <AccordionContent>
              <StyledImage src={securityEndpoints} alt="Security Endpoints" />
            </AccordionContent>
          )}
        </AccordionItem>

        {/* Admin Section */}
        <AccordionItem>
          <AccordionTitle onClick={() => toggleSection("admin")}>
            <h2>Admin</h2>
            <span>{activeSection === "admin" ? "-" : "+"}</span>
          </AccordionTitle>
          {activeSection === "admin" && (
            <AccordionContent>
              <StyledImage src={adminEndpoints} alt="Admin Endpoints" />
            </AccordionContent>
          )}
        </AccordionItem>
      </Accordion>
    </EndpointsContainer>
  );
}

export default Endpoints;
