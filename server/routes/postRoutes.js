import express from 'express';

const router = express.Router();

// GET /posts -> allposts 
router.get("/all-posts", (req, res) => {return res.json({url : req.url})} )

// GET /posts/:id -> post by id
router.get("/post:id", (req, res) => {return res.json({url : req.url, id: req.params.id})})

// // POST /posts -> create new post
// router.post("/create", )

// // PUT /posts/:id -> updata/edit post
// router.put("/updata:id", )

// // DELETE /posts/:id -> delete post
// router.delete("/delete:id",)


export default router;