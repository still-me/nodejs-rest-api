const fs = require("fs/promises");
const path = require("path");

const { User } = require("../../models");
const { Conflict } = require("http-errors");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email in use");
  }
  const newUser = new User({ email, subscription });
  newUser.setPassword(password);
  await newUser.save();
  const { avatarURL, id } = newUser;

  const avatarsdDir = path.join(__dirname, "../../", "public/avatars");
  const dirPath = path.join(avatarsdDir, id);
  await fs.mkdir(dirPath);

  res.status(201).json({
    status: "success",
    code: 201,
    user: {
      email,
      subscription: subscription || "starter",
      avatarURL,
    },
  });
};

module.exports = register;
