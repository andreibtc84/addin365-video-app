import { Search } from "./Search";
import styled from "styled-components";

export const ToolBar = ({ setSearchTerm }) => {
  return (
    <ToolBarContainer>
      <Search setSearchTerm={setSearchTerm} />
    </ToolBarContainer>
  );
};

const ToolBarContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  margin: 3rem auto;
`;
