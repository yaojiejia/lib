import express from 'express';
import {createBook} from '../controllers/post.controller.js';

const router = express.Router();
// Create a new book
router.post("/createBook", createBook);
export default router;