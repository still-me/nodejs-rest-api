const Contact = require("../../models");

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      const message = `contact with id ${id} not found`;
      return res.status(404).json({
        message,
      });
    }

    res.json({ deletedContact });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContact;
