import express from "express";
import { initDb, getDb } from "./db/connect.js"; // When you are using ECMAScript modules you are forced to provide the file extension = > NOT ../db/connect BUT ../db/connect.js
import { router as userRoutes } from './routes/user.js';

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// routes 
app.use('/api/user', userRoutes);

initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(PORT);
        console.log(`Connected to DB and listening on ${PORT}`);
    }
})