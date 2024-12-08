import { NavLink } from "react-router";
import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
`;

const AboutTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const AboutDescription = styled.p`
  font-size: 1.2em;
  text-align: justify;
  color: #555;
`;

function About() {
  return (
    <AboutContainer>
      <AboutTitle>Vison</AboutTitle>
      <AboutDescription>
        The VetLocator helps users find available veterinarians, particularly in
        emergency situations outside regular business hours. Users can also
        retrieve a list of all veterinarians in their area to make informed
        decisions about which vet to contact. This API is designed for easy
        integration into applications that aim to support pet owners in urgent
        situations.
      </AboutDescription>

      <AboutTitle>Links</AboutTitle>
      <NavLink to="">Link to API</NavLink>
    </AboutContainer>
  );
}

export default About;