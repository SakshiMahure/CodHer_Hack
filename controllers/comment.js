const Course= require('../models/course');
const Comment = require('../models/comment');

module.exports.createComment=async (req,res) => {
    const course=await Course.findById(req.params.id);
    const comment=new Comment(req.body.comment);
    comment.author= req.user._id;
    course.comment.push(comment);
    await comment.save();
    await course.save();
    req.flash('success', 'Created new review!');
    res.redirect(`/courses/${course._id}`);
}