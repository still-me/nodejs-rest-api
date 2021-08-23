const getById = require("./getById");
const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const deleteContact = async id => {
  try {
    const targetContact = await getById(id);
    if (!targetContact) {
      return null;
    }
    const allContacts = await getAll();
    const newContacts = allContacts.filter(({ id }) => id !== targetContact.id);
    await updateContacts(newContacts);
    return targetContact;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = deleteContact;
