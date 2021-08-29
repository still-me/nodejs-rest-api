const mongoose = require("mongoose");
require("dotenv").config();

const app = require("../app");

const { URL_DB, PORT = 3000 } = process.env;

mongoose
  .connect(URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });
