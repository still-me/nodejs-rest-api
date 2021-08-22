const updateContacts = require("./updateContacts");
const getAll = require("./getAll");

const add = async data => {
  try {
    const allContacts = await getAll();
    const newContact = {
      id: allContacts[allContacts.length - 1].id + 1,
      ...data,
    };
    allContacts.push(newContact);
    await updateContacts(allContacts);
    return newContact;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = add;
