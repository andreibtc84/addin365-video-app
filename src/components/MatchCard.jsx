import { React } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MatchCard = ({ match }) => {
  const parsedDate = new Date(match.date).toUTCString();

  return (
    <nav
      onClick={() => {
        localStorage.setItem("currentMatch", JSON.stringify(match));
      }}
    >
      <MatchCardDiv to={`/SingleMatch/${match.title}`}>
        <MatchThumbnail
          src={match.thumbnail}
          alt={match.title}
          width="400px"
          className="thumbnail"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              "https://w7.pngwing.com/pngs/168/212/png-transparent-football-pitch-street-football-athletics-field-graphy-football-field-angle-text-rectangle.png";
          }}
        />
        <MatchDetailsDiv>
          <h2>{match.side1.name}</h2>
          <p>vs.</p>
          <h2>{match.side2.name}</h2>
        </MatchDetailsDiv>
        <MatchDetailsDiv>
          <p>
            <span>Competition: </span>
            {match.competition.name}
          </p>
          <p>
            <span>Date: </span>
            {parsedDate}
          </p>
        </MatchDetailsDiv>
      </MatchCardDiv>
    </nav>
  );
};

const MatchCardDiv = styled(Link)`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin: 1.5rem;
  border-radius: 0.5rem;
  width: 20rem;
  height: 28rem;
  overflow: hidden;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  text-decoration: none;
  color: black;

  @media (max-width: 370px) {
    width: 15rem;
    height: 20rem;
    font-size: 0.7rem;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
`;

const MatchDetailsDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: start;
  justify-content: space-evenly;
  max-width: 100%;
  heigth: auto;
  padding: 1rem;

  span {
    font-weight: bold;
  }
`;

const MatchThumbnail = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
