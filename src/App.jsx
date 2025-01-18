import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
