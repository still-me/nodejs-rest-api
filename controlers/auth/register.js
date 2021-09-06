const { User } = require("../../models");
const { Conflict } = require("http-errors");
// const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email in use");
  }
  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // await User.create({ email, password: hashPassword });

  const newUser = new User({ email, subscription });
  newUser.setPassword(password);
  await newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    user: {
      email,
      subscription: subscription || "starter",
    },
  });
};

module.exports = register;
