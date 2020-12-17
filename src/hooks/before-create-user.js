// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars

const { BadRequest, Forbidden } = require('@feathersjs/errors');

module.exports = (options = {}) => {
  return async context => {

    const { data } = context;

    if (data.age && data.age < 40) {
      throw new BadRequest("Age of the user must be greater or equal to 40");
    }

    if (!data.email.includes("zap.co.il")){
      throw new Forbidden("Only emails with zap domain can register to this service");
    }

    return context;
  };
};
