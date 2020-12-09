const db = require("../data/dbConfig");

module.exports = {
  getAllOrders,
  findOrderById,
};

function getAllOrders() {
  return db("orders");
}

function findOrderById(id) {
  return db("orders").where({ id }).first();
}
