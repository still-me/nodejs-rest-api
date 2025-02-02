const { Contact } = require("../../models");

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(id);
  if (!deletedContact) {
    const message = `contact with id ${id} not found`;
    return res.status(404).json({
      message,
    });
  }

  res.json({ deletedContact });
};

module.exports = deleteContact;
