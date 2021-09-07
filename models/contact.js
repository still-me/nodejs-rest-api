const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactScheme = Schema(
  {
    name: {
      type: String,
      required: [true, "Contact name is required"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const joiContactScheme = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string()
    // eslint-disable-next-line prefer-regex-literals
    .pattern(new RegExp("^\\+[\\(\\-]?(\\d[\\(\\)\\-]?){11}\\d$"))
    .required(),
  favorite: Joi.boolean(),
  owner: Joi.string(),
});

const Contact = model("contact", contactScheme);

module.exports = {
  Contact,
  joiContactScheme,
};
