import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AllMatches } from "./AllMatches";
import { MdArrowBackIosNew } from "react-icons/md";

export const SingleMatch = () => {
  const [game, setGame] = useState(
    JSON.parse(localStorage.getItem("currentMatch"))
  );
  console.log(game);
  return (
    <>
      <Link
        to={"/"}
        element={<AllMatches />}
        style={{
          textDecoration: "none",
          alignSelf: "start",
          maxWidth: "100%",
        }}
      >
        <StyledButton>
          <MdArrowBackIosNew />
          Back
        </StyledButton>
      </Link>

      <VideoContainer>
        <VideoFrame>
          <iframe
            src={
              game.videos[0].embed.split("src='")[1].split(" ")[0].split("'")[0]
            }
            frameBorder="0"
            width="100%"
            height="100%"
            allow="autoplay; fullscreen"
            title={localStorage.getItem(game.title)}
          ></iframe>
        </VideoFrame>
        <DetailsDiv>
          <h1>{game.title}</h1>
        </DetailsDiv>
      </VideoContainer>
    </>
  );
};

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-around;
  background-color: white;
  margin: 3rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  border: 1px solid white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color: black;
    color: white;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }

  MdArrowBackIosNew {
    width: 4rem;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  margin: 0 auto;
`;
const VideoFrame = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const DetailsDiv = styled.div`
  padding: 1rem;
`;
