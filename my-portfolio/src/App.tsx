import React from "react";
import Home from "./components/Home";
import { ThemeProvider ,CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./theam";


function App() {
  const [theme , colorMode]=useMode();
  return (
    // <ColorModeContext.Provider value={colorMode}>
    // <ThemeProvider theme={theme}>
      // <CssBaseline /> 
      <Home />
    // </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

export default App;
