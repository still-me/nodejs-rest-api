const express = require("express");
const router = express.Router();

const { joiUserSchema } = require("../../models/user");
const {
  validation,
  controllerWrapper,
  authenticate,
} = require("../../middlewares");
const { auth: ctrl } = require("../../controlers");

const userValidationMiddleware = validation(joiUserSchema);
router.post(
  "/register",
  userValidationMiddleware,
  controllerWrapper(ctrl.register),
);
router.post("/login", userValidationMiddleware, controllerWrapper(ctrl.login));
router.get(
  "/logout",
  controllerWrapper(authenticate),
  controllerWrapper(ctrl.logout),
);

router.get(
  "/current",
  controllerWrapper(authenticate),
  controllerWrapper(ctrl.getCurrentUser),
);

module.exports = router;
