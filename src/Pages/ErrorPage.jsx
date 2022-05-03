import React from "react";
import { Link } from "react-router-dom";
import { Pages } from "./Pages";

export const ErrorPage = () => {
  return (
    <Link
      to={"/"}
      element={<Pages />}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src="https://www.kindpng.com/picc/m/164-1647170_404-page-04-404-error-page-png-transparent.png"
        alt="Eror 404. Page Not Found"
      />
    </Link>
  );
};
