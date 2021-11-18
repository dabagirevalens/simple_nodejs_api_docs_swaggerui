const createUser = require("./users");

module.exports = {
  paths: {
    "/": {
      ...createUser,
    },
  },
};
