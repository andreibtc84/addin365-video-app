import styled from "styled-components";

export const Search = ({ setSearchTerm }) => {
  return (
    <>
      <SearchBox
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
};

const SearchBox = styled.input`
  padding: 1rem 2rem;
  max-width: 100%;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  box-shadow: inset 1px 1px 1px 1px #cbced1, inset -1px -1px 1px white;
`;
