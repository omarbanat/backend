// mongodb+srv://ojbanat:mfSJ0FarSCjdfOMp@cluster0.8vlkrfp.mongodb.net/?retryWrites=true&w=majority

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

async function main() {
  await mongoose.connect(
    'mongodb+srv://ojbanat:mfSJ0FarSCjdfOMp@cluster0.8vlkrfp.mongodb.net/blogsDB?retryWrites=true&w=majority'
  );
}

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



app.get('/', (req, res) => {
//   here I'm assumin to read all the data from the database
});

app.post('/', (req, res) => {
    // Here I will call the collection
    // then I will recieve the new requested data
    // then I will add the data inside the database
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
