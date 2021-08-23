const fs = require("fs/promises");
const filePath = require("./filePath");

const updateContacts = async contacts => {
  const contactsString = JSON.stringify(contacts, null, 2);
  await fs.writeFile(filePath, contactsString);
};

module.exports = updateContacts;
