import styled from "styled-components";
import homeImg from "../assets/images/img.png";
import dogImg from "../assets/images/dog1.png";
import entranceImg from "../assets/images/entrance.png";

const HomeContainer = styled.div`
  text-align: center;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Ensures images wrap on smaller screens */
  gap: 20px; /* Spacing between images */
  margin-bottom: 20px;
`;

const StyledImage = styled.img`
  width: 100%; /* Responsive width */
  max-width: 300px; /* Images will not exceed 300px */
  height: auto; /* Maintain aspect ratio */
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #ff9505;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  width: 100%; /* Responsive width */
  max-width: 800px; /* Limiting width for better readability */
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
`;

function Home() {
  return (
    <HomeContainer>
      <Heading>Welcome to VetLocator</Heading>
      <Paragraph>
        Find veterinarians in your area, available for emergencies and general
        consultations. Designed to support pet owners in urgent situations.
      </Paragraph>
      <ImagesContainer>
        <StyledImage src={homeImg} alt="Home" />
        <StyledImage src={dogImg} alt="Dog" />
        <StyledImage src={entranceImg} alt="Entrance" />
      </ImagesContainer>
    </HomeContainer>
  );
}

export default Home;
