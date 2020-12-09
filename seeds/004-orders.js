
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {customer: 'Jevon Cochran', date: '12/05/2020', method: 'pickup', total: 25.00, phone_number: '5104248976'},
        {customer: 'Tanya Smith', date: '12/06/2020', method: 'delivery', total: 33.00, phone_number: '3139763456', address: '17320 Pembroke Ave, Detroit, MI 48235'},
        {customer: 'Rajan Bradley', date: '12/07/2020', method: 'pickup', total: 20.00, phone_number: '5104248976'}
      ]);
    });
};
