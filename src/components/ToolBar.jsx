import { Search } from "./Search";
import styled from "styled-components";
import { Filter } from "./Filter";

export const ToolBar = ({
  setSearchTerm,
  setActiveChampionship,
  championships,
}) => {
  return (
    <ToolBarContainer>
      <Search setSearchTerm={setSearchTerm} />
      <Filter
        championships={championships}
        setActiveChampionship={setActiveChampionship}
      />
    </ToolBarContainer>
  );
};

const ToolBarContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  margin: 3rem auto;
`;
