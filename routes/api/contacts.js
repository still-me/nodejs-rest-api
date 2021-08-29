const express = require("express");
const router = express.Router();

const { joiContactScheme } = require("../../models/contact");
const { validation } = require("../../middlewares");
const ctrl = require("../../controlers/contacts");
const validationMiddleware = validation(joiContactScheme);

router.get("/", ctrl.getAllContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", validationMiddleware, ctrl.addContact);

router.delete("/:id", ctrl.deleteContact);

router.put("/:id", validationMiddleware, ctrl.updateContactById);

router.patch("/:id/favorite", ctrl.updateStatusContact);

module.exports = router;
