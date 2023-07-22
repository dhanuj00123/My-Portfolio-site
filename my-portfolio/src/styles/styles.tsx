import { createTheme } from "@mui/material/styles";

const colors = {
  primary: `#5e3bee`,
  secondary: `#282938`,
  backgroundColor: `#f5fcff`,
  bodyColor: `#1c1e53`,
};

const theam = createTheme({
  palette: {
    primary: {
      main: colors.backgroundColor,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: colors.backgroundColor,
      },
    },
  },
});
export default theam;
