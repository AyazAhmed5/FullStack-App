import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./App.js";

const PORT = process.env.PORT || 8000;

connectDB()
  .then(
    app.listen(PORT, () => {
      console.log("Server is running on: " + PORT);
    })
  )
  .catch((error) => {
    console.log("DB connection failed");
  });

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on(error, (error) => {
//       console.log("Error: " + error);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Your app is listening on port: ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error: " + error);
//     throw error;
//   }
// })();
