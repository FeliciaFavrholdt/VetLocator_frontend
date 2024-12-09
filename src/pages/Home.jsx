import styled from "styled-components";
import homeImg from "../assets/images/img.png";
import dogImg from "../assets/images/dog1.png";
import entranceImg from "../assets/images/entrance.png";
import Searchbar from "../components/Searchbar";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 10px; /* Add padding for smaller screens */
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 images per row */
  gap: 10px; /* Spacing between images */
  width: 100%;
  max-width: 960px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 images per row on smaller screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 image per row on very small screens */
  }
`;

const StyledImage = styled.img`
  width: 100%; /* Take the full width of the grid cell */
  max-width: 300px; /* Limit the maximum width */
  height: auto;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #ff9505;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  max-width: 800px;
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <ContentWrapper>
        <Heading>Welcome to VetLocator</Heading>
        <Searchbar />
        <ImagesContainer>
          <StyledImage src={homeImg} alt="Home" />
          <StyledImage src={dogImg} alt="Dog" />
          <StyledImage src={entranceImg} alt="Entrance" />
        </ImagesContainer>
        <Paragraph>
          Find veterinarians in your area, available for emergencies and general
          consultations. Designed to support pet owners in urgent situations.
        </Paragraph>
      </ContentWrapper>
    </HomeContainer>
  );
}

export default Home;