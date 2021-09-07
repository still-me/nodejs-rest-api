const express = require("express");
const router = express.Router();

const { joiContactScheme } = require("../../models/contact");
const {
  validation,
  authenticate,
  controllerWrapper,
} = require("../../middlewares");
const { contacts: ctrl } = require("../../controlers");
const validationMiddleware = validation(joiContactScheme);

router.get(
  "/",
  controllerWrapper(authenticate),
  controllerWrapper(ctrl.getAllContacts),
);

router.get(
  "/:id",
  controllerWrapper(authenticate),
  controllerWrapper(ctrl.getContactById),
);

router.post(
  "/",
  controllerWrapper(authenticate),
  validationMiddleware,
  controllerWrapper(ctrl.addContact),
);

router.delete(
  "/:id",
  controllerWrapper(authenticate),
  controllerWrapper(ctrl.deleteContact),
);

router.put(
  "/:id",
  controllerWrapper(authenticate),
  validationMiddleware,
  controllerWrapper(ctrl.updateContactById),
);

router.patch(
  "/:id/favorite",
  controllerWrapper(authenticate),
  controllerWrapper(ctrl.updateStatusContact),
);

module.exports = router;
