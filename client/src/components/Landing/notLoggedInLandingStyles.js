export default (theme) => ({
  root: { textAlign: "center", margin: "25vh 0" },
  Logo: {
    [theme.breakpoints.down("xs")]: {
      width: "400px",
    },
  },
  Subtitle: {
    textAlign: "center",
  },
  ButtonContainer: {
    margin: "10vh 0",
  },
  ButtonIcon: {
    height: "1rem",
  },
  Button: {
    margin: "10px",
  },
});
