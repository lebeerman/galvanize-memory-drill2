// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres:///memory2'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
