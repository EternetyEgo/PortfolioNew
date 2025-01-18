import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "react-scroll-to-top";
import PageProgressBar from "page-progressbar-react";

function App() {
  return (
    <Box>
      <ScrollToTop style={{paddingLeft: "6px"}} smooth />
      <Box pos={"relative"} zIndex={999}><PageProgressBar /></Box>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
