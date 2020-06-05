import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import officinaWoff from "./officina-sans-bold.woff";

let officina = {
  fontFamily: "Officina Sans Bold",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `url(${officinaWoff}) format('woff)`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
let theme = createMuiTheme({
  typography: {
    fontFamily: "Officina Sans Bold",
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
