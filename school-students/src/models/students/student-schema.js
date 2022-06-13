const Joi = require('joi');

const schema = Joi.object().keys({
  name: Joi.string().required().error(() => 'must have name as string'),
  age: Joi.number().error(() => 'age must be a number'),
  grade: Joi.number().error(() => 'grade must be a number'),
  prefect: Joi.boolean().error(() => 'prefect must be a boolean')
});

module.exports = schema
