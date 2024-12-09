import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #fce89f;
  text-align: center;
  padding: 10px;
  font-size: 0.9rem;
  color: #555;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 VetLocator. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
