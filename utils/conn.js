
let knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'alabi2david',
      database : 'datadb'
    }
  });

export default knex;