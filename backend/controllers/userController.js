const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  //token will be expried after 1d
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const signupUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const user = await User.signup(userName, email, password);
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { signupUser, loginUser };
