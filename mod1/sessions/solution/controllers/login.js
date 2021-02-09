module.exports = (req, res) => {
  if (!req.session.userId) {
    // use mongo user id as session id
    req.session.userId = `${req.auth.user}123!`;
  }

  res
    .status(200)
    .send(`You're logged in, ${req.auth.user}! Now call other API routes.`);
};
