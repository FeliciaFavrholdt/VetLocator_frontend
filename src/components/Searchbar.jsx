import styled from "styled-components";

const SearchbarContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;

  @media (max-width: 768px) {
    max-width: 100%; /* Allow the search bar to take full width on smaller screens */
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #eb871d;
    outline: none;
    box-shadow: 0px 2px 6px rgba(220, 140, 79, 0.5);
  }
`;

function Searchbar() {
  return (
    <SearchbarContainer>
      <SearchInput type="text" placeholder="Search for something..." />
    </SearchbarContainer>
  );
}

export default Searchbar;