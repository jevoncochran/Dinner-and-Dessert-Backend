
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inquiries').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('inquiries').insert([
        {name: 'John Doe', email: 'john.doe@gmail.com', phone_number: '3134248282', contents: 'I\'m looking for someone to cater a Christmas dinner. Do you do that? How much would you charge for a family of 5?', date: 'December 3, 2020', time: '16:48'}
      ]);
    });
};
