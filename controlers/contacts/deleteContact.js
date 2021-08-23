const contactsOperations = require("../../model/contacts");

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedContact = await contactsOperations.deleteContact(id);
    if (!deletedContact) {
      const message = `contact with id ${id} not found`;
      return res.status(404).json({
        message,
      });
    }

    const message = `contact ${deletedContact.name},  deleted`;
    res.json({ message });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContact;
