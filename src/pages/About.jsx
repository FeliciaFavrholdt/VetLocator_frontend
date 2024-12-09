import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px; /* Adds space between the paragraph and link */
`;

const Description = styled.p`
  font-size: 1.2em;
  text-align: justify;
  color: #555;
  flex: 1; /* Allows the paragraph to grow as needed */
`;

const StyledLink = styled(NavLink)`
  font-size: 1.2em;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function About() {
  return (
    <Container>
      <Title>Vision</Title>
      <Content>
        <Description>
          The VetLocator helps users find available veterinarians, particularly
          in emergency situations outside regular business hours. Users can also
          retrieve a list of all veterinarians in their area to make informed
          decisions about which vet to contact. This API is designed for easy
          integration into applications that aim to support pet owners in urgent
          situations.
        </Description>
        <StyledLink to="">Link to deployed API</StyledLink>
        <StyledLink to="">Link to API repository</StyledLink>
      </Content>
    </Container>
  );
}

export default About;