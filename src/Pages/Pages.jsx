import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { SingleMatch } from "../components/SingleMatch";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SingleMatch/:title" element={<SingleMatch />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
