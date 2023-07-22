import React from "react";
import Home from "./components/Home";
import { ThemeProvider } from "@mui/material/styles";
import theam from "./styles/styles";

function App() {
  return (
    <ThemeProvider theme={theam}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
