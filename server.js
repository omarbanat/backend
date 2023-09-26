require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/db');
const blogRoutes = require('./routes/blogsRoute');

const app = express();
const port = 8000;

app.use(cors());

// used for sending json body in the request
app.use(express.json());
app.use(express.urlencoded());

app.use('/blog', blogRoutes);

app.listen(port, () => {
  dbConnection()
    .then(() => console.log('success'))
    .catch((err) => console.log(err));
  console.log(`Example app listening on port ${port}`);
});
