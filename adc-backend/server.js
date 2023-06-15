/* 
    - Import of the necessary modules and libraries for the application, such as Express, Mongoose, and dotenv.
    - An instance of the Express application is created and stored in the app variable.
    - The PORT constant is set to the value of the environment variable PORT or 8000 as a fallback.
    - The dotenv module is used to load environment variables from a .env file.
*/
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router as userRoutes } from './routes/user.js';

const app = express();
const PORT = process.env.PORT || 8000;
dotenv.config();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})



/* 
    This line sets up the route /api/user and associates it with the userRoutes router, which is imported from the ./routes/user.js file. This allows the application to handle user-related API endpoints.
*/ 
app.use('/api/user', userRoutes);

/* 
    - The code establishes a connection to the MongoDB database specified by the MONGODB_URI environment variable using Mongoose.
    - If the connection is successful, the application starts listening for incoming requests on the specified PORT, and a success message is logged to the console.
    - If an error occurs during the database connection, the error is caught and logged to the console.
*/
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log('connected to db & listening on port', PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })