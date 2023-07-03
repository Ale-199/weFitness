const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required." });
  }

  //Token in authorization property will be like 'bearer ewrgd234dgdsg3.23425dsfgs4523t.2343fsdt23'
  const token = authorization.split("")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id }).select("_id");

    next();
  } catch (err) {
    res.status(401).json({ error: "Request is not authorized." });
  }
};

module.exports = requireAuth;
