const { User } = require("../../models");
const { NotFound } = require("http-errors");

const verify = async (req, res) => {
  const { verificationToken: verifyToken } = req.params;
  const user = await User.findOne({ verifyToken });

  if (!user) {
    throw new NotFound("User not found");
  }

  await User.findByIdAndUpdate(user.id, { verifyToken: null, verify: true });

  res.json({
    message: "Verification successful",
  });
};

module.exports = verify;
