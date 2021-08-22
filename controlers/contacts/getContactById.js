const contactsOperations = require("../../model/contacts");

const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await contactsOperations.getById(id);
    if (!contact) {
      const message = `contact with id ${id} not found`;
      return res.status(404).json({
        message,
      });
    }

    res.json({ contact });
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
