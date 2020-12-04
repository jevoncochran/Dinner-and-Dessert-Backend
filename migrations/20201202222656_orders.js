exports.up = function(knex) {
    return knex.schema
      .createTable('orders', tbl => {
          tbl.increments()
  
          tbl
              .string('customer', 255)
              .notNullable()
  
          tbl
              .date('date')
              .notNullable()
  
          tbl
              .string('method')
              .notNullable()
  
          tbl
              .decimal('total', 2, 2)
              .notNullable()
  
          tbl
              .string('address', 255)
  
          tbl
              .string('phone_number')
              .notNullable()
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('orders')
  };