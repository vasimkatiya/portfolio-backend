const { Router } = require("express");
const { showReviewController, createReviewController } = require("../controllers/review.controllers");

const reviewRouter = Router();

reviewRouter.get("/show",showReviewController);
reviewRouter.post("/add",createReviewController)

module.exports = reviewRouter;