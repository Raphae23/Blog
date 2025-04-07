import express from "express";
import { addArticle, addComment, deleteArticle, getArticle, getArticles } from "../controllers/articleController.js";

const router = express.Router();

// POST: Create a new article
router.post("/article", addArticle)

//GET: Fetch an article
router.get('/article/:id', getArticle)

// GET: Fetch all articles
router.get('/articles', getArticles)

// DELETE: delete an article
router.delete('/article', deleteArticle)

//POST: create a new comment
router.post('/article/:id/comments', addComment)
export default router;