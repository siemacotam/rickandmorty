import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    common: {
      black: "#121213",
      white: "#ffffff",
    },
    primary: {
      light: "#d8ffd8",
      main: "#00ff00",
      dark: "#008900",
      contrastText: "#00ff00",
    },
    secondary: {
      light: "#fffbf8",
      main: "#fff4eb",
      dark: "#fdd9bc",
      contrastText: "#FA8220",
    },
    error: {
      light: "#ED7080",
      main: "#ef364c",
      dark: "#C4273A",
      contrastText: "#ffffff",
    },
    warning: {
      light: "#FFCA6F",
      main: "#FAA91E",
      dark: "#fa8220",
      contrastText: "#FFCCCC",
    },
    info: {
      light: "#6AAFFF",
      main: "#1E84FA",
      dark: "#015BC3",
      contrastText: "#ffffff",
    },
    success: {
      light: "#24E0B5",
      main: "#00A680",
      dark: "#007459",
      contrastText: "#ffffff",
    },
    background: {
      default: "#E5E5E5",
      // primary: "#FFF3E0",
    },
    grey: {
      "50": "#fafafa",
      "200": "#F5F5F5",
      "400": "#BDBDBD",
      "800": "#424242",
    },
  },

  typography: {
    fontFamily:
      '"Oswald","Roboto", "Helvetica", "Arial", sans-serif !important',
  },
});
theme = responsiveFontSizes(theme);

export default theme;
