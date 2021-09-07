const { User } = require("../../models");

const getCurrentUser = async (req, res) => {
  const { _id: id } = req.user;
  const user = await User.findById(id);
  const { email, subscription } = user;
  res.json({
    status: 200,
    user: {
      email,
      subscription,
    },
  });
};

module.exports = getCurrentUser;
