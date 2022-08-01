import { Routes, Route } from "react-router-dom";
import { ApplySurvey } from "../pages/ApplySurvey";
import { Questions } from "../pages/Questions";
import { Result } from "../pages/Results";
import { WelcomePage } from "../pages/Welcome";

export const Router = () => (
  <Routes>
    <Route path="/" element={<WelcomePage />} />
    <Route path="apply" element={<ApplySurvey />} />
    <Route path="questions" element={<Questions />} />
    <Route path="result" element={<Result />} />
  </Routes>
);
