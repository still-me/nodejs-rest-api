const contactsOperations = require("../../model/contacts");

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await contactsOperations.getAll();
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllContacts;
