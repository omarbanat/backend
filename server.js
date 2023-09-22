const express = require('express');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const app = express();
const port = 8000;

async function main() {
  await mongoose.connect(
    'mongodb+srv://ojbanat:mfSJ0FarSCjdfOMp@cluster0.8vlkrfp.mongodb.net/blogsDB?retryWrites=true&w=majority'
  );}

main()
  .then(() => console.log('success'))
  .catch((err) => console.log(err));

// async function mainUsingTryCatch() {
//   try {
//     await mongoose.connect(
//       'mongodb+srv://ojbanat:mfSJ0FarSCjdfOMp@cluster0.8vlkrfp.mongodb.net/blogsDB?retryWrites=true&w=majority'
//     );
//     console.log('success');
//   } catch (error) {
//     console.log(error);
//   }
// }

// mainUsingTryCatch();

const blogsSchema = new Schema({
  title: { type: String, required: true },
  publisher: { type: String, required: true },
  date: { type: Date, required: true },
  body: { type: String, required: true },
  keyword: String,
});

const Blog = model('Blogs', blogsSchema);

app.get('/', async (req, res) => {
  const blogs = await Blog.find({});
  res.status(200).json({
    success: true,
    message: 'Data retrieved successfully',
    data: blogs,
  });
});

app.post('/', async (req, res) => {
  const blog = await Blog.create({
    title: 'Title2',
    publisher: 'Publisher2',
    date: '2023-09-22',
    body: 'Any text2',
    keyword: 'body2',
  });
  res.status(200).json({
    success: true,
    message: 'Blog added successfully',
    data: blog,
  });
});

app.put('/', (req, res) => {
  //   res.send('Hello from /put request');
});

app.delete('/', (req, res) => {
  //   res.send('Hello from /delete request');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
