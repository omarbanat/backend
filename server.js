require('dotenv').config();
const express = require('express');
const dbConnection = require('./config/db');
const Blog = require('./models/Blog');

const app = express();
const port = 8000;

// used for sending json body in the request
app.use(express.json());
app.use(express.urlencoded());

app.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: blogs,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
});

app.get('/:ID', async (req, res) => {
  try {
    // const blog = await Blog.find({ _id: req.params.ID });
    const blog = await Blog.findById(req.params.ID);
    res.status(200).json({
      success: true,
      message: 'Blog retrieved successfully',
      data: blog,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'unable to get blog by ID',
      error: error,
    });
  }
});

app.post('/', async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json({
      success: true,
      message: 'Blog added successfully',
      data: blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Blog not added successfully',
      error: error,
    });
  }
});

app.put('/:ID', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.ID, req.body);
    res.status(200).json({
      success: true,
      message: 'Blog updated successfully.',
      data: blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to update blog',
      error: error,
    });
  }
});

app.delete('/:ID', async (req, res) => {
  try {
    const blog = await Blog.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
      blog: blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error occured while deleting the blog',
      error: error,
    });
  }
});

app.listen(port, () => {
  dbConnection()
    .then(() => console.log('success'))
    .catch((err) => console.log(err));
  console.log(`Example app listening on port ${port}`);
});
