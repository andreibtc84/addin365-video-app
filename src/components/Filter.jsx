import styled from "styled-components";

export const Filter = ({ setActiveChampionship, championships }) => {
  return (
    <SelectBox
      name="Championship"
      id="championship"
      onChange={(e) => {
        setActiveChampionship(e.target.value);
      }}
    >
      {championships.map((championship) => (
        <option
          value={`${championships[0] === championship ? "" : championship}`} // Filters out "Filter by championship" option
          key={championship}
        >
          {championship}
        </option>
      ))}
    </SelectBox>
  );
};

const SelectBox = styled.select`
  font-size: 1.2rem;
  padding: 1rem 2rem;
  margin: 1rem;
  max-width: 100%;
  border: none;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (max-width: 850px) {
    font-size: 1rem;
  }
`;
