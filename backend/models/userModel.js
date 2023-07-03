const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static signup function.
userSchema.static.signup = async function (userName, email, password) {
  if (!email || !password || !userName) {
    throw Error("All fields must be filled.");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid, please try again.");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough.");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await this.create({ userName, email, password: hashedPassword });

  return user;
};

//static login method
userSchema.static.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Invalid account, please try again.");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Invalid account, please try again.");
  }

  return usre;
};

module.exports = mongoose.model("User", userSchema);
