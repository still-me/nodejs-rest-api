const fs = require("fs/promises");

const filePath = require("./filePath");

const getAll = async () => {
  try {
    console.log(filePath);
    const data = await fs.readFile(filePath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getAll;
