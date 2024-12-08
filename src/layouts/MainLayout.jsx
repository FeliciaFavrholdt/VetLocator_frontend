import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/VetLocatorLogo.png"; // Ensure the path is correct

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

const Navbar = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #ffc107; /* Slightly darker yellow */
    color: #000;
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Footer = styled.footer`
  background-color: #fce89f;
  text-align: center;
  padding: 10px;
  font-size: 0.9rem;
  color: #555;
`;

function MainLayout() {
  return (
    <MainContainer>
      {/* Header Section */}
      <Header>
        <LogoContainer>
          <Logo src={logo} alt="VetLocator Logo" />
        </LogoContainer>
        <Navbar>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/about">About</NavLinkStyled>
          <NavLinkStyled to="/endpoints">Endpoints</NavLinkStyled>
        </Navbar>
      </Header>

      {/* Main Content */}
      <Content>
        <Outlet />
      </Content>

      {/* Footer */}
      <Footer>
        <p>&copy; 2024 VetLocator. All rights reserved.</p>
      </Footer>
    </MainContainer>
  );
}

export default MainLayout;
