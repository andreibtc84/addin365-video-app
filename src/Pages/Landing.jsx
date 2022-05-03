import React from "react";
import { Login } from "@microsoft/mgt-react";
import styled from "styled-components";

export const Landing = () => {
  return (
    <LandingPage>
      <img
        src="https://i.pinimg.com/originals/9e/d8/61/9ed86194c90b60ad5ce0e14fdb1b97d5.png"
        alt="MeeTv Logo"
        width="40%"
      />
      <LoggedOutUser className="mgt-light" />
    </LandingPage>
  );
};

const LandingPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
`;
const LoggedOutUser = styled(Login)`
  border: 2px solid black;
  border-radius: 0.3rem;
  overflow: none;
  align-self: center;
  justify-self: center;
  background-color: whitesmoke;
`;
