const express = require("express");
const router = express.Router();

const { joiUserSchema } = require("../../models/user");
const {
  validation,
  controllerWrapper,
  authenticate,
  upload,
} = require("../../middlewares");
const { auth: ctrl } = require("../../controlers");

const userValidationMiddleware = validation(joiUserSchema);
router.post(
  "/register",
  userValidationMiddleware,
  controllerWrapper(ctrl.register),
);

router.get("/verify/:verificationToken", controllerWrapper(ctrl.verify));

router.post("/verify", controllerWrapper(ctrl.verifyRepeat));

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

router.patch(
  "/avatar",
  controllerWrapper(authenticate),
  upload.single("avatar"),
  controllerWrapper(ctrl.updateAvatar),
);

module.exports = router;
