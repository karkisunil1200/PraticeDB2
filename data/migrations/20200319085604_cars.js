exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();

    tbl.string('vin').notNullable();

    tbl.string('model').notNullable();

    tbl.string('make').notNullable();

    tbl.string('type');

    tbl.string('status');

    tbl.integer('mileage').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
