import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import postRoute from "./routes/post.route.js";
import getRoute from "./routes/get.route.js";
import mongoose from 'mongoose';


// Load environment variables from .env file


const app = express();

// Connect to MongoDB using the URL from environment variables
mongoose.connect(process.env.MONGODB_URL, {

}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Failed to connect to MongoDB', err);
});

app.use("/", (req, res) => {
  res.send("Welcome to the API");
});

app.use(express.json());

app.use("/api/posts", postRoute);
app.use("/api/gets", getRoute);

app.listen(8800, () => {
  console.log('Server is running on port 8800')
});
