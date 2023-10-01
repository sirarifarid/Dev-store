const router = require('express').Router();
const Blog = require('../models/blog');


// add new Blog
router.get('/blogs', async (req, res) => {
    try {
        const blog = await Blog.find()
        res.status(200).json({
           message: 'Blog get sucessfully',
           result: blog
        })
     } catch (error) {
        res.status(500).json({
           error: error,
        })
     }
 })


 // update product based on id
router.put('/:id', async (req, res) => {
    try {
       const updatedResult = await Blog.findByIdAndUpdate(
          { _id: req.params.id },
          {
             title: "Elon Musk says Twitter is roughly breaking even in biggest interview since 'painful' takeover"
          },
          {
             new: true
          }
       );
       res.status(200).json({
          message: 'Blog Edit Sucessfully',
          result: updatedResult
       })
       
    } catch (error) {
       res.status(500).json({
          error: error
       })
    }
 })

// add new Blog
router.post('/addBlog', async (req, res) => {
    const newBlog = new Blog(req.body);
    try{
       const result = await newBlog.save()
       res.status(200).json({
          message: 'Blog inserted successfully',
          result: result,
       })
    }catch(error){
      res.status(500).json({
         error: error
      })
    }
 })

 // get single Blog
router.get('/:id', async (req, res) => {
    try {
       const updatedResult = await Blog.findById(
          { _id: req.params.id },
       );
       res.status(200).json({
          message: 'Blog filter sucessfully',
          result: updatedResult,
       })
    } catch (error) {
       res.status(500).json({
          error: error
       })
    }
 })

 // delete Blog by id
router.delete('/:id', async (req, res) => {
    try {
       const deleteBlog = await Blog.findByIdAndDelete(
          { _id: req.params.id },
       );
       res.status(200).json({
          message: 'Blog Deleted Sucessfully',
          result:   deleteBlog,
       })
     
    } catch (error) {
       res.status(500).json({
          error: error
       })
    }
 })


 module.exports = router