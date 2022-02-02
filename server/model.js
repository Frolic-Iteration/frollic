const { Pool } = require('pg');

const PG_URI = 'postgres://nrdrjgdy:bC5KJydZijobu9sRDHUXRvrqcxVsoRjj@kashin.db.elephantsql.com/nrdrjgdy';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
};
  