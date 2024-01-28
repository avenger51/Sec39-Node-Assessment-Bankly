/** Shared config for application; can be req'd many places. */

require('dotenv');

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';

const PORT = +process.env.PORT || 3001;

const BCRYPT_WORK_FACTOR = 10;

//added the entire string for bankly_test and no more getaddrinfo ENOTFOUND AFTER NEARLY A DAY
const DB_URI =
  process.env.NODE_ENV === 'test'
    ? 'postgresql://postgres:password@localhost/bankly_test'
    : 'postgresql://postgres:password@localhost/bankly';


module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI
};
