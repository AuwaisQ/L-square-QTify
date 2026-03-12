import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar/Navbar";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import endpoint from "./Api/endpoint";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${endpoint}/songs`)
      .then(res => res.json())
      .then(data => {
        setSongs(data);
      })
      .catch(err => {
        console.error('Error fetching songs:', err);
      });
  }, []);

  return (
    <Box className="App" sx={{ mt: "74px" }}>
      <Navbar searchData={songs} />
      <AppRoutes />
    </Box>
  );
}

export default App;
