const getAll = require("./getAll");

const getById = async id => {
  try {
    const allContacts = await getAll();
    const targetContact = allContacts.find(
      contact => contact.id === Number(id),
    );

    if (!targetContact) {
      return null;
    }

    return targetContact;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getById;
