import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Login from "./Pages/login/login";
import Report from "./Pages/reports/report";
import ReportALL from "./Pages/reportAll/reportAll";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/report" element={<Report/>} />
        <Route path="/reportAll" element={<ReportALL/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
