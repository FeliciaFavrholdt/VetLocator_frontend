import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/VetLocatorLogo.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #fce89f; /* Matches the logo's yellow tone */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function MainLayout() {
  return (
    <MainContainer>
      <Header>
        <LogoContainer>
          <Logo src={logo} alt="VetLocator Logo" />
        </LogoContainer>
        <Navbar />
      </Header>

      <Content>
        <Outlet />
      </Content>

      <Footer />
    </MainContainer>
  );
}

export default MainLayout;
