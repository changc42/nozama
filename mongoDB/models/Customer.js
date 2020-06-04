module.exports = (googleID, fname, lname, cookie) => ({
  googleID,
  name: {
    fname,
    lname,
  },
  cookie,
  cart: [],
  nozama_bucks: 100,
  inventory: [],
});
