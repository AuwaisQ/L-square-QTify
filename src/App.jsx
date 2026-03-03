import { Box } from "@mui/material";
import Navbar from "./components/NavBar/Navbar";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  return (
    <Box className="App" sx={{ mt: "74px" }}>
      <Navbar />
      <AppRoutes />
    </Box>
  );
}

export default App;
