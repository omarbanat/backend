const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URL;

async function dbConnection() {
  await mongoose.connect(MONGODB_URL);
}

// async function mainUsingTryCatch() {
//   try {
//     await mongoose.connect(MONGODB_URL);
//     console.log('success');
//   } catch (error) {
//     console.log(error);
//   }
// }

// mainUsingTryCatch();

module.exports = dbConnection;
