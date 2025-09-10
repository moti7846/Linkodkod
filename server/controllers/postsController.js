import { create_post, delete_post, read_posts, update_post } from "../service/posts.js";

export async function getAllPosts(req, res) {
    const posts = await read_posts();
    if (!posts || posts.length === 0) {
        return res.status(404).json({ msg: "No posts found." });
    }
    res.status(200).json(posts);
}

export async function getPost(req, res) {
    const id = (req.params.id).slice(1)
    const posts = await read_posts();
    if (!posts || posts.length === 0) {
        return res.status(404).json({ msg: "No post found." });
    }
    const post = posts.find((p) => p.id === Number(id))
    res.status(200).json(post);
}

export async function createPost(req, res) {
    const isAdded = await create_post(req.body);
    if (isAdded) {
        return res.status(201).json({ msg: "Post created successfully."});
    }
    res.status(500).json({ msg: "Error creating post." });
}

export async function updatePost(req, res) {
    const is_update = await update_post({...req.body , id : (req.params.id).slice(1)});
    if (is_update) {
        return res.status(200).json({ msg: "Post updated successfully." });
    }
    res.status(404).json({ msg: "Post not found." });
}

export async function deletePost(req, res) {
    const isDelete = await delete_post((req.params.id).slice(1));
    if (isDelete) {
        return res.status(200).json({ msg: "Post deleted successfully." });
    }
    res.status(404).json({ msg: "Post not found." });
}

export async function getImgPost(req, res) {
    const id = (req.params.id).slice(1);
    res.sendFile(`${id}.png`, { root: 'public'});
}
