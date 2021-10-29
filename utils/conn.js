
let knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'wgh9.whogohost.com',
    user: 'medikedu_datrine',
    password: 'TeMi4ToPe',
    database: 'medikedu_rialdb'
  },
  pool: { min: 0, max: 7 }
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
      usersTbl.dateTime("createdOn", { precision: 6 }).defaultTo(knex.fn.now(6));
      usersTbl.dateTime("updatedOn", { precision: 6 }).defaultTo(knex.fn.now(6));
      usersTbl.string("unique_code");
    })
  }
}).catch(err => console.log(err));

let hasColumnAndIfNotAddIt = async function ({ columnName, tableName }) {
  let has = await knex.schema.hasColumn("", "");
  if (!has) {
    return knex.schema.alterTable(tableName, function (usersTbl) {
      usersTbl.enum("role", ["admin", "user"]).defaultTo("user");

    });
  }
}
knex.schema.hasTable("wallets").then(function (exists) {
  if (!exists) {
    return knex.schema.createTable("wallets", function (usersTbl) {
      usersTbl.string("username");
      usersTbl.decimal("balance", 2);
      usersTbl.decimal("ref_bal", 2);
      usersTbl.dateTime("createdOn", { precision: 6 }).defaultTo(knex.fn.now(6));
      usersTbl.dateTime("updatedOn", { precision: 6 }).defaultTo(knex.fn.now(6));
    })
  }
}).catch(err => console.log(err));

knex.schema.hasTable("transactions").then(function (exists) {
  if (!exists) {
    return knex.schema.createTable("transactions", function (usersTbl) {
      usersTbl.string("username");
      usersTbl.dateTime("createdOn", { precision: 6 }).defaultTo(knex.fn.now(6));
      usersTbl.dateTime("updatedOn", { precision: 6 }).defaultTo(knex.fn.now(6));
    })
  }
}).catch(err => console.log(err))
export default knex;