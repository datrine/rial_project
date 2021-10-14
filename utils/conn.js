
let knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'wgh9.whogohost.com',
    user: 'medikedu_datrine',
    password: 'TeMi4ToPe',
    database: 'medikedu_rialdb'
  }
});

knex.schema.hasTable("users").then(function (exists) {
  if (!exists) {
    return knex.schema.createTable("users", function (usersTbl) {
      usersTbl.string("username");
      usersTbl.string("email");
      usersTbl.string("passhash");
      usersTbl.string("password");
      usersTbl.string("firstname");
      usersTbl.string("lastname");
      usersTbl.date("dob");
      usersTbl.string("phone_num");
      usersTbl.enum("gender", ["male", "female"]);
      usersTbl.string("referrer");
      usersTbl.dateTime("createdBy",{precision:6}).defaultTo(knex.fn.now(6));
      usersTbl.dateTime("updatedBy",{precision:6}).defaultTo(knex.fn.now(6));
      usersTbl.string("unique_code");
    })
  }
}).catch(err => console.log(err))
export default knex;