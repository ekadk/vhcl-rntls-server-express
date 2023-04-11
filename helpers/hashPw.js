const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const hashPw = (pw) => {
  return bcrypt.hashSync(pw, salt);
};

const comparePw = (pw, hash) => {
  return bcrypt.compareSync(pw, hash);
};

module.exports = { hashPw, comparePw };
