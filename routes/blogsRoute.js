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

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.get('/getAll', getAllBlogs);
router.get('/get/:ID', getBlogByID);
router.post('/add', upload.single('img'), addBlog);
router.put('/update/:ID', updateBlogByID);
router.delete('/delete/:ID', deleteBlog);

// router.get('/getAll', blogsController.getAllBlogs);
// router.get('/get/:ID', blogsController.getBlogByID);
// router.post('/add', blogsController.addBlog);
// router.put('/update/:ID', blogsController.updateBlogByID);
// router.delete('/delete/:ID', blogsController.deleteBlog);

module.exports = router;
