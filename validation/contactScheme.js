const Joi = require("joi");

const joiProductScheme = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string()
    // eslint-disable-next-line prefer-regex-literals
    .pattern(new RegExp("^\\+[\\(\\-]?(\\d[\\(\\)\\-]?){11}\\d$"))
    .required(),
});

module.exports = joiProductScheme;
