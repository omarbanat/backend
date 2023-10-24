const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogsSchema = new Schema({
  title: { type: String, required: true },
  publisher: { type: String, required: true },
  date: { type: Date, required: true },
  body: { type: String, required: true },
  image: { type: String, required: true },
  keyword: String,
});

const Blog = model('Blogs', blogsSchema);

module.exports = Blog;
