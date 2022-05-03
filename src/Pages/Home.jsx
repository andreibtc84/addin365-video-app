import React from "react";
import { AllMatches } from "../components/AllMatches";

export const Home = ({ setCurrentMatch }) => {
  return <AllMatches setCurrentMatch={setCurrentMatch} />;
};
