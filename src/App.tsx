import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import Vessel from "./components/Vessel";
import Routings from "./router/routings";
import { theme } from "./lib/theme";
import './App.css';

const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Vessel>
        <Routings />
      </Vessel>
    </Router>
  </ChakraProvider>
);

export default App;