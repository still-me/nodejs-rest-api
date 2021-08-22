const contactsOperations = require("../../model/contacts");
const contactsScheme = require("../../validation/contactScheme");

const addContact = async (req, res, next) => {
  try {
    const { body } = req;
    const { error } = contactsScheme.validate(body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    const newContact = await contactsOperations.add(body);
    res.status(201).json({
      newContact,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
