module.exports = (theme) => ({
  root: { textAlign: "center", margin: "25vh 0" },
  Logo: {
    [theme.breakpoints.down("xs")]: {
      width: "400px",
    },
  },
  Subtitle: {
    textAlign: "center",
  },
  ButtonIcon: {
    height: "1rem",
  },
  Button: {
    margin: "10px",
  },
});
