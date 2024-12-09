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
  gap: 20px;
`;

const Description = styled.p`
  font-size: 1.2em;
  text-align: justify;
  color: #555;
  flex: 1;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* Adds space between links */
  margin-top: 10px;
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
      <Title>Vision for the API</Title>
      <Content>
        <Description>
          The VetLocator helps users find available veterinarians, particularly
          in emergency situations outside regular business hours. Users can also
          retrieve a list of all veterinarians in their area to make informed
          decisions about which vet to contact. This API is designed for easy
          integration into applications that aim to support pet owners in urgent
          situations.
        </Description>
        <LinksContainer>
          <StyledLink to=""># Deployed API</StyledLink>
          <StyledLink to=""># Backend repository</StyledLink>
          <StyledLink to="https://github.com/FeliciaFavrholdt/VetLocator_frontend">
            # Frontend repository
          </StyledLink>
          <StyledLink to="https://excalidraw.com/#json=bTRXTrkoO8VCoiFvQ7Rjc,rCiZAKz4IsXDDyRmdPoZuA">
           # API Mockup Ideas
          </StyledLink>
        </LinksContainer>
      </Content>
    </Container>
  );
}

export default About;
