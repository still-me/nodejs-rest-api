const { User } = require("../../models");
const { BadRequest } = require("http-errors");
const { sendMail } = require("../../utils");

const verifyRepeat = async (req, res) => {
  console.log("hello");
  const { email } = req.body;

  if (!email) {
    throw new BadRequest("missing required field email");
  }

  const user = await User.findOne({ email });
  const { verify, verifyToken } = user;

  if (verify) {
    throw new BadRequest("Verification has already been passed");
  }

  const verificationEmail = {
    to: email,
    subject: "Confirm your verification",
    html: `<a href="http://localhost:3000/api/users/verify/${verifyToken}"> Please verify your email address </a>`,
  };

  await sendMail(verificationEmail);

  res.json({ message: "Verification email sent" });
};

module.exports = verifyRepeat;
