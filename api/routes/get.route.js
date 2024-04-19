import express from 'express';
import {getBookByISBN, getAuthor, getGenre} from '../controllers/get.controller.js';
const router = express.Router();

router.get("/Book/:isbn", getBookByISBN);
router.get("/Author/:name", getAuthor);
router.get("/Genre/:name", getGenre);

export default router;