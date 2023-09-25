const express = require('express');
const router = express.Router();

// const blogsController = require('../contollers/blogsController');

const {
  getAllBlogs,
  getBlogByID,
  addBlog,
  updateBlogByID,
  deleteBlog,
} = require('../contollers/blogsController');

router.get('/getAll', getAllBlogs);
router.get('/get/:ID', getBlogByID);
router.post('/add', addBlog);
router.put('/update/:ID', updateBlogByID);
router.delete('/delete/:ID', deleteBlog);

// router.get('/getAll', blogsController.getAllBlogs);
// router.get('/get/:ID', blogsController.getBlogByID);
// router.post('/add', blogsController.addBlog);
// router.put('/update/:ID', blogsController.updateBlogByID);
// router.delete('/delete/:ID', blogsController.deleteBlog);

module.exports = router;
