exports.up = function (knex) {
  return knex.schema.createTable("reviews", (tbl) => {
    tbl.increments();

    tbl.string("name", 100).notNullable();

    tbl.string("review", 500).notNullable();

    tbl.date("date").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("reviews");
};
