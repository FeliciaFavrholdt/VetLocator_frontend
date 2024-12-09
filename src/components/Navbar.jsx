import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
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

function Navbar() {
  return (
    <NavbarContainer>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/about">About</NavLinkStyled>
      <NavLinkStyled to="/endpoints">Endpoints</NavLinkStyled>
    </NavbarContainer>
  );
}

export default Navbar;
