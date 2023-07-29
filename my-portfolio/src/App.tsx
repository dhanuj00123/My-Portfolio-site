import React from "react";
import Home from "./components/Home";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { themeSettings } from "./theam";

function App() {
  return (
    // <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={themeSettings}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

export default App;
