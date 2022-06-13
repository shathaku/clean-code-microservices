const Joi = require('joi');

module.exports = function validator(schema) {
  return function (payload) {
    console.log(payload)
    let {error} = Joi.validate(payload, schema, {abortEarly: true});
    if (error) {
      let message = error.details.map(el => el.message).join('\n')
      return {
        error: message
      }
    }
    return true
  }
}