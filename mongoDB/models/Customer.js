module.exports = (googleID, fname, lname, username) => ({
  googleID,
  name: {
    fname,
    lname,
    username,
  },
  cart: [],
  nozama_bucks: 100,
  inventory: [],
});
