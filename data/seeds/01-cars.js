exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, make: 'Honda', model: 'Pilot', vin: '23423dddf5', mileage: 2232423},
        {id: 2, make: 'Tesla', model: 'model3', vin: '23423dddf5', mileage: 2232423},
        {id: 3, make: 'Toyota', model: 'camery', vin: '23423dddf5', mileage: 2232423}
      ]);
    });
};
