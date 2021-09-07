const { User } = require("../../models");
const { Conflict } = require("http-errors");

const register = async (req, res, next) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email in use");
  }
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
