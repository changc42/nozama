import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import officinaWoff from "./officina-sans-bold.ttf";

let officina = {
  fontFamily: "Officina Sans Bold",
  src: `url(${officinaWoff})`,
};
let theme = createMuiTheme({
  typography: {
    fontFamily: "Officina Sans Bold",
  },
  palette: {
    background: { default: "white" },
    primary: {
      main: "#fe9a01",
    },
    secondary: {
      main: "#000000",
      light: "gray",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [officina],
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
