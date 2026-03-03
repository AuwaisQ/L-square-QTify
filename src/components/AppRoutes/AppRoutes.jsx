import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Albums from "../../Pages/Albums/Albums";
import { Alert } from "@mui/material";

export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/albums" element={<Albums/>} />
    </Routes>
  );
}