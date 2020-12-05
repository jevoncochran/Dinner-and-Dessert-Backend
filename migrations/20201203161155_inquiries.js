
exports.up = function(knex) {
  return knex.schema
    .createTable('inquiries', tbl => {
        tbl.increments()

        tbl
            .string('name', 100)
            .notNullable()

        tbl 
            .string('email', 100)
        
        tbl
            .string('phone_number', 20)

        tbl
            .string('contents', 500)
            .notNullable()

        tbl
            .date('date')
            .notNullable()

        tbl
            .time('time')
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('inquiries')
};
