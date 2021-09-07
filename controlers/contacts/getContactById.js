const { Contact } = require("../../models");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id).populate("owner", "_id email");
  if (!contact) {
    const message = `contact with id ${id} not found`;
    return res.status(404).json({
      message,
    });
  }

  res.json({ contact });
};

module.exports = getContactById;
