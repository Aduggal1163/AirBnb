const express=require("express")
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const{reviewSchema}=require("../schema.js");
const ExpressError=require("../utils/ExpressError.js");
const Review=require("../models/review.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js")
const Listing = require("../models/listing.js");
const methodOverride = require("method-override");

router.use(methodOverride("_method"));


const reviewController=require("../controllers/reviews.js")
 //Reviews Route
  //post route
  router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview))
//delete review
// DELETE review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports=router;