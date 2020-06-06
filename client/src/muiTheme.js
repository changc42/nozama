import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import officinaWoff from "./officina-sans-bold.ttf";

let officina = {
  fontFamily: "Officina Sans Bold",
  src: `url(${officinaWoff})`,
};
let theme = createMuiTheme({
  palette: { background: { default: "white" } },
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
