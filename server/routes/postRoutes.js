import express from 'express';
import { createPost, deletePost, getAllPosts, getPost, updatePost } from '../controllers/postsController.js';

const router = express.Router();

// GET /posts/all-posts -> allposts 
router.get("/all-posts", getAllPosts)

// GET /posts/post:id -> post by id
router.get("/post:id", getPost)

// POST /posts/create -> create new post
router.post("/create", createPost)

// PUT /posts/update:id -> update/edit post
router.put("/update:id", updatePost)

// DELETE /posts/delete:id -> delete post
router.delete("/delete:id", deletePost)


export default router;