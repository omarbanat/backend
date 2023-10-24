const axios = require('axios');
const Blog = require('../models/Blog');

const getAllBlogs = async (req, res) => {
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
};

const getBlogByID = async (req, res) => {
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
};

const addBlog = async (req, res) => {
  // const { title, publisher, date, body } = req.body;

  try {
    const formData = new FormData();
    formData.append('key', 'fc45b9bc491df49d8c66b1f010c647ae');
    formData.append('image', req.file.buffer.toString('base64'));
    const response = await axios.post(
      'https://api.imgbb.com/1/upload',
      formData
    );

    const imageURL = response?.data?.data?.url;

    const blog = await Blog.create({
      ...req.body,
      image: imageURL,
    });
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
};

const updateBlogByID = async (req, res) => {
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
};

const deleteBlog = async (req, res) => {
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
};

module.exports = {
  getAllBlogs,
  getBlogByID,
  addBlog,
  updateBlogByID,
  deleteBlog,
};
