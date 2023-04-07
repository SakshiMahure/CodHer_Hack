const express= require('express');
const router=express.Router();
const catchAsync= require('../utilities/catchAsync');
const comments= require('../controllers/comment');

router.post('/',catchAsync(comments.createReview));

module.exports= router;