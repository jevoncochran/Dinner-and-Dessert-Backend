const db = require("../data/dbConfig");

module.exports = {
  getAllOrders,
  findOrderById,
  addOrder,
  addOrderDetails,
  findOrderDetailsById,
};

function getAllOrders() {
  return db("orders");
}

function findOrderById(id) {
  return db("orders").where({ id }).first();
}

function addOrder(order) {
  return db("orders")
    .insert(order)
    .then((ids) => {
      const [id] = ids;
      return findOrderById(id);
    });
}

function addOrderDetails(row) {
  return db("order_details")
    .insert(row)
    .then((ids) => {
      const [id] = ids;
      return findOrderDetailsById(id);
    });
}

function findOrderDetailsById(id) {
  return db("order_details").where({ id }).first();
}
