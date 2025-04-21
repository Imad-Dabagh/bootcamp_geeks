const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "geeks8",
    database: "w6d3knex",
    port: 5432,
  },
});

module.exports = db;
