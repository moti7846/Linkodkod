import express from 'express';

const router = express.Router();

// GET /posts/all-posts -> allposts 
router.get("/all-posts", (req, res) => {return res.json({url : req.url})} )

// GET /posts/post:id -> post by id
router.get("/post:id", (req, res) => {return res.json({url : req.url, id: req.params.id})})

// // POST /posts/create -> create new post
// router.post("/create", )

// // PUT /posts/update:id -> update/edit post
// router.put("/update:id", )

// // DELETE /posts/delete:id -> delete post
// router.delete("/delete:id",)


export default router;