import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MatchCard } from "./MatchCard";
import { ToolBar } from "../components/ToolBar";

export const AllMatches = () => {
  const [matchList, setMatchList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [championships, setChampionships] = useState([
    "Filter by championship",
  ]);
  const [activeChampionship, setActiveChampionship] = useState([]);

  useEffect(() => {
    const getFiles = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
          "X-RapidAPI-Key":
            "d8c5919909mshf788d543f667e86p1997dcjsn48b264758952",
        },
      };

      const response = await fetch(
        "https://free-football-soccer-videos.p.rapidapi.com/",
        options
      );
      const data = await response.json();
      const tournamentList = data
        .map((match) => match.competition.name)
        .filter((compName, index, arrRef) => arrRef.indexOf(compName) == index);
      tournamentList.unshift("Filter by Championship");
      setChampionships(tournamentList);

      setMatchList(data);
    };
    getFiles();
  }, []);

  const filteredMatchList = matchList
    .map(
      (match) => match.competition.name.includes(activeChampionship) && match
    )
    .filter((mappedMatch) => mappedMatch.title && mappedMatch);

  return (
    <>
      <ToolBar
        setSearchTerm={setSearchTerm}
        championships={championships}
        setActiveChampionship={setActiveChampionship}
      />
      <MatchList>
        {filteredMatchList
          .filter((match) =>
            !searchTerm
              ? match
              : match.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((match, index) => (
            <MatchCard match={match} key={index} />
          ))}
      </MatchList>
    </>
  );
};

const MatchList = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-decoration: none;
  background-color: whitesmoke;
  max-width: 78%;
`;
