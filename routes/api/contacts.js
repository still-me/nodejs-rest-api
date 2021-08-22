const express = require("express");
const router = express.Router();

const ctrl = require("../../controlers/contacts");

router.get("/", ctrl.getAllContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", ctrl.addContact);

router.delete("/:id", ctrl.deleteContact);

router.put("/:id", ctrl.updateContactById);

module.exports = router;
