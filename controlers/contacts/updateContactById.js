const contactsOperations = require("../../model/contacts");
const contactsScheme = require("../../validation/contactScheme");

const updateContactById = async (req, res, next) => {
  try {
    const { error } = contactsScheme.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    const { id } = req.params;
    const updateContact = await contactsOperations.update(id, req.body);
    if (!updateContact) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.json({
      updateContact,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateContactById;
