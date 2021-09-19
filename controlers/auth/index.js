const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const verifyRepeat = require("./verifyRepeat");

module.exports = {
  register,
  login,
  logout,
  getCurrentUser,
  updateAvatar,
  verify,
  verifyRepeat,
};
