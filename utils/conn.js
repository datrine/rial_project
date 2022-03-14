/**
 * @type {import("knex")()}
 */
let knex;
let counter = 0;
let createDBConn = () => {
  try {
    if (knex) {
      console.log("Pools already used: " + knex.client.pool.pendingCreates.length);
      return knex;
    }
    console.log(knex)
    knex = require('knex')({
      client: 'mysql2',
      connection: {
        host: 'wgh9.whogohost.com',
        user: 'medikedu_datrine',
        password: 'TeMi4ToPe',
        database: 'medikedu_rialdb',

      },
      pool: {
        min: 1, max: 1,
      }
    });
    console.log("Counter: " + ++counter)

    return knex;
  } catch (error) {

  }
}
async function startTables(params) {
  try {
    let knex = createDBConn();
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

      (async () => {
        let hasStateColumn = await knex.schema.hasColumn("users", "state");
        if (!hasStateColumn) {
          console.log("hasStateColumn")
          return knex.schema.alterTable("users", (builder) => {
            builder.enum("state", ["banned", "active"]).defaultTo("active");
            console.log("hasStateColumn")
          });
        }
      })();

    }).catch(err => console.log(err));

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
      else {
        knex.schema.hasColumn("wallets")
      }
    }).catch(err => console.log(err));

    knex.schema.hasTable("transactions").then(function (exists) {
      if (!exists) {
        return knex.schema.createTable("transactions", function (usersTbl) {
          usersTbl.string("username");
          usersTbl.string("email");
          usersTbl.string("requestID");
          usersTbl.string("platform");
          usersTbl.decimal("amount", 2);
          usersTbl.dateTime("createdOn", { precision: 6 }).defaultTo(knex.fn.now(6));
          usersTbl.dateTime("updatedOn", { precision: 6 }).defaultTo(knex.fn.now(6));
        })
      }
    }).catch(err => console.log(err));

    (async () => {
      let hasAmountColumn = await knex.schema.hasColumn("transactions", "service");
      if (!hasAmountColumn) {
        return knex.schema.alterTable("transactions", (builder) => {
          builder.enum("service", ["data", "electricity", "airtime", "cable tv", "topup"]).defaultTo("airtime");
          console.log("hasService");
        });
      }
    })();

    knex.schema.hasTable("admintable").then(function (exists) {
      if (!exists) {
        return knex.schema.createTable("admintable", function (usersTbl) {
          usersTbl.string("username");
          usersTbl.string("email");
          usersTbl.string("passhash");
          usersTbl.string("password");
          usersTbl.dateTime("last_login", { precision: 6 }).defaultTo(knex.fn.now(6));
          usersTbl.dateTime("createdOn", { precision: 6 }).defaultTo(knex.fn.now(6));
          usersTbl.dateTime("updatedOn", { precision: 6 }).defaultTo(knex.fn.now(6));
        })
      }
    }).catch(err => console.log(err));

  } catch (error) {
    console.log(error)
  }
}
startTables();
export default createDBConn;