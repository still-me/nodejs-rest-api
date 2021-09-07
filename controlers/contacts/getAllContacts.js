const { Contact } = require("../../models");

const getAllContacts = async (req, res) => {
  const contacts = await Contact.find({ owner: req.user._id }).populate(
    "owner",
    "_id email",
  );
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAllContacts;
