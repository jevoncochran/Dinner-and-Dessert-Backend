const express = require("express");
const router = express.Router();

const reviews = require("./review-model");

// get all reviews
router.get("/", (req, res) => {
  reviews
    .getAllReviews()
    .then((r) => {
      res.status(200).json(r);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "A servor error has occured" });
    });
});

// get individual review
router.get("/:reviewId", (req, res) => {
  const { reviewId } = req.params;

  reviews
    .findReviewById(reviewId)
    .then((r) => {
      res.status(200).json(r);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "A servor error has occured" });
    });
});

// add a review
router.post("/", (req, res) => {
  let review = req.body;

  reviews
    .addReview(review)
    .then((r) => {
      res.status(201).json(r);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "A server error has occurred" });
    });
});

module.exports = router;
