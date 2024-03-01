import { createTheme } from "@mui/material";
import { green, grey, indigo } from "@mui/material/colors";
import ShabnamFD from "../../assets/fonts/Farsi-Digits/Shabnam-FD.woff";



let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'Shabnam';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Shabnam'), local('Shabnam-FD'), url(${ShabnamFD}) format('woff2');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
    },
  },

  typography: {
    fontFamily: ["Shabnam", "Tahoma"].join(","),
  },
  box:{
    width:'100%'
  },
  palette: {
    primary: {
      main: indigo[500],
      normal: indigo["A400"],
    },
    secondary: {
      main: indigo[50],
    },
    neutral: {
      light: grey[50],
      medium: grey[200],
      normal: grey[700],
      main: grey[900],
      menu: grey[500],
    },
    green: {
      main: green[800],
    },
  },
});

theme = createTheme(theme, {
  typography: {
    link: {
      fontsize: "0.8rem",
      [theme.breakpoints.up("md")]: {
        fontsize: "0.9rem",
      },
      fontWeight: 500,
      color: theme.palette.primary.normal,
      display: "block",
      cursor: "pointer",
    },
    cardTitle: {
      fontFamily: "Shabnam",
      fontsize: "1.2rem",
      display: "block",
      fontWeight: 500,
    },
    h6: {
      fontsize: "1rem",
    },
    h7: {
      fontsize: "0.8rem",
    },
    h8: {
      fontsize: "0.7rem",
    },
  },
});

export default theme;
