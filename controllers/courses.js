const mongoose = require('mongoose');
const Course = require('../models/course');
const User=require('..models/user');

module.exports.allCourse = async(req, res) => {
    Course.find({})
    .then((items) => res.json(items));
};

module.exports.showCourse = async(req, res) => {
    const {id} =req.params;
    console.log(id);
    Course.findById(id)
    .then((items) => res.json(items));
};

module.exports.addToWishlist = async(req, res) => {
    const courseId = req.params.id;
    const user = await User.findById(req.user._id);
    
    if((user.wishlist).includes(courseId)){
        req.flash('error', "Book already in wishlist");
    }
    else{
        await User.findByIdAndUpdate(req.user._id, {$push: {wishlist: courseId}});
        req.flash('success', 'Course added to wishlist');
    }
    res.redirect(`/courses/${courseId}`);
};

module.exports.likes= async(req,res) => {
    const courseId = req.params.id;
    const userId = req.user._id
    const course = await Course.findById(courseId);
    if ((course.course_likes).includes(userId)){
        req.flash('error', "Cannot like more than once!")
    }
    else {
        await Course.findByIdAndUpdate(courseId, { $push: { book_likes: userId }});
        req.flash('success', "Liked!");
    }
    res.redirect(`/courses/${courseId}`);
};


