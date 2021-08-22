const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const update = async (id, updateData) => {
  try {
    const allContacts = await getAll();
    const index = allContacts.findIndex(contact => contact.id === Number(id));
    if (index === -1) {
      return null;
    }
    allContacts[index] = { ...allContacts[index], ...updateData };
    await updateContacts(allContacts);
    return allContacts[index];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = update;
