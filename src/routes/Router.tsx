import { Routes, Route } from "react-router-dom";
import { ApplySurvey } from "../pages/ApplySurvey";
import { WelcomePage } from "../pages/Welcome";

export const Router = () => (
  <Routes>
    <Route path="/" element={<WelcomePage />} />
    <Route path="apply" element={<ApplySurvey />} />
  </Routes>
);
