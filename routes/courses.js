const express= require('express');
const router=express.Router();
const catchAsync= require('../utilities/catchAsync'); 
const courses= require('../controllers/courses');

router.get('/', catchAsync(courses.allCourse));

router.get('/:id',  catchAsync(courses.showCourse));



router.put('/:id/wishlist', catchAsync(courses.addToWishlist));

router.put('/:id/likes', catchAsync(books.likes));



module.exports=router;