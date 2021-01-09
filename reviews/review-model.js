const db = require("../data/dbConfig");

module.exports = { getAllReviews, findReviewById, addReview };

function getAllReviews() {
  return db("reviews");
}

function findReviewById(id) {
  return db("reviews").where({ id }).first();
}

function addReview(review) {
  return db("reviews")
    .insert(review, "id")
    .then((ids) => {
      const [id] = ids;
      return findReviewById(id);
    });
}
