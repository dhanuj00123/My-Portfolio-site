import { createTheme } from "@mui/material";

export const colors = {
  //purple
  primary: {
    100: "#dfd8fc",
    200: "#bfb1f8",
    300: "#9e89f5",
    400: "#7e62f1",
    500: "#5e3bee",
    600: "#4b2fbe",
    700: "#38238f",
    800: "#26185f",
    900: "#130c30",
  }, //white
  background: {
    100: "#fdfeff",
    200: "#fbfeff",
    300: "#f9fdff",
    400: "#f7fdff",
    500: "#f5fcff",
    600: "#c4cacc",
    700: "#939799",
    800: "#626566",
    900: "#313233",
  }, //violot
  body: {
    100: "#d2d2dd",
    200: "#a4a5ba",
    300: "#777898",
    400: "#494b75",
    500: "#1c1e53",
    600: "#161842",
    700: "#111232",
    800: "#0b0c21",
    900: "#060611",
  },
  //black
  secondary: {
    100: "#d4d4d7",
    200: "#a9a9af",
    300: "#7e7f88",
    400: "#535460",
    500: "#282938",
    600: "#20212d",
    700: "#181922",
    800: "#101016",
    900: "#08080b",
  },
  //red
  error: {
    100: "#efccd2",
    200: "#df99a6",
    300: "#d06679",
    400: "#c0334d",
    500: "#b00020",
    600: "#8d001a",
    700: "#6a0013",
    800: "#46000d",
    900: "#230006",
  },
  //orange
  warning: {
    100: "#ffecd3",
    200: "#ffd8a7",
    300: "#ffc57a",
    400: "#ffb14e",
    500: "#ff9e22",
    600: "#cc7e1b",
    700: "#995f14",
    800: "#663f0e",
    900: "#332007",
  },
  //info
  info: {
    100: "#f1f8fe",
    200: "#e4f2fd",
    300: "#d6ebfd",
    400: "#c9e5fc",
    500: "#bbdefb",
    600: "#96b2c9",
    700: "#708597",
    800: "#4b5964",
    900: "#252c32",
  },
  //green
  sucess: {
    100: "#e1ecd7",
    200: "#c3d9af",
    300: "#a4c588",
    400: "#86b260",
    500: "#689f38",
    600: "#537f2d",
    700: "#3e5f22",
    800: "#2a4016",
    900: "#15200b",
  },
};

//mui theam seting
export const themeSettings = createTheme({
  palette: {
    primary: {
      main: colors.primary[500],
      light: colors.primary[300],
      dark: colors.primary[700],
    },
    secondary: {
      main: colors.secondary[500],
      light: colors.secondary[300],
      dark: colors.secondary[700],
    },
    error: {
      main: colors.error[500],
      light: colors.error[300],
      dark: colors.error[700],
    },
    success: {
      main: colors.sucess[500],
      light: colors.sucess[300],
      dark: colors.sucess[700],
    },
    info: {
      main: colors.info[500],
      light: colors.info[300],
      dark: colors.info[700],
    },
    warning: {
      main: colors.warning[500],
      light: colors.warning[300],
      dark: colors.warning[700],
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightRegular: 300,
    allVariants: {
      accentColor: colors.secondary[500],
    },
    h1: {
      fontFamily: "Roboto",
      fontSize: 40,
    },
    h2: {
      fontFamily: "Roboto",
      fontSize: 32,
    },
    h3: {
      fontFamily: "Roboto",
      fontSize: 24,
    },
    h4: {
      fontFamily: "Roboto",
      fontSize: 20,
    },
    h5: {
      fontFamily: "Roboto",
      fontSize: 16,
    },
    h6: {
      fontFamily: "Roboto",
      fontSize: 14,
    },
    body2: {
      fontFamily: "Roboto",
      fontSize: 16,
    },
    overline: {
      fontFamily: "Roboto",
      fontSize: 32,
    },
    button: {
      fontFamily: "Roboto",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        centerRipple: false,
        color: "primary",
        variant: "contained",
      },
    },
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
        color: "primary",
        centerRipple: false,
      },
    },
  },
});
