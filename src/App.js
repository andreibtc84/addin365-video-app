import "./App.css";
import { Login } from "@microsoft/mgt-react";
import styled from "styled-components";
import { Pages } from "./Pages/Pages";
import { BrowserRouter, HashRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Providers, ProviderState } from "@microsoft/mgt-element";
import { Landing } from "./Pages/Landing";

// Function checking if there's a logged in user using Mgt Provider
function useIsSignedIn() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const updateState = () => {
      const provider = Providers.globalProvider;
      setIsSignedIn(provider && provider.state === ProviderState.SignedIn);
    };

    Providers.onProviderUpdated(updateState);
    updateState();

    return () => {
      Providers.removeProviderUpdatedListener(updateState);
    };
  }, []);

  return [isSignedIn];
}

function App() {
  const [isSignedIn] = useIsSignedIn();
  return (
    <HashRouter>
      <AppContainer className="App">
        {/* Checks if user is signedß in and conditionally renders either the landing page either the other components  */}
        {!isSignedIn ? (
          <Landing />
        ) : (
          <>
            <AppHeader>
              <div>
                <h1>MeeTv</h1>
                <img
                  src="https://i.pinimg.com/originals/9e/d8/61/9ed86194c90b60ad5ce0e14fdb1b97d5.png"
                  alt="MeeTv Logo"
                  width="70px"
                />
              </div>
              <LoggedInUser className="mgt-light" /> {/* Mgt Login component */}
            </AppHeader>
            <Pages />
          </>
        )}
      </AppContainer>
    </HashRouter>
  );
}

export default App;

const LoggedInUser = styled(Login)`
  background-color: white-smoke;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  width: 100%;
  overflow-x: hidden;
`;

const AppHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px;
  background-color: whitesmoke;
  width: 100%;
  position: sticky;

  div {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }
`;
