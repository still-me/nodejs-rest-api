const fs = require("fs/promises");
const path = require("path");
const { sendMail } = require("../../utils");

const { User } = require("../../models");
const { Conflict } = require("http-errors");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email in use");
  }

  const newUser = new User({ email, subscription });
  newUser.createVerifyToken();
  newUser.setPassword(password);
  const { avatarURL, verifyToken } = newUser;

  const verificationEmail = {
    to: email,
    subject: "Confirm your verification",
    html: `<a href="http://localhost:3000/api/users/verify/${verifyToken}"> Please verify your email address </a>`,
  };

  await sendMail(verificationEmail);
  await newUser.save();

  const avatarsDir = path.join(__dirname, "../../", "public/avatars");
  const dirPath = path.join(avatarsDir, newUser.id);
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
