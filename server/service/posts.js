import { writeDBFile, readDBFile } from "../DAL/DAL.js";

const path = "./data/posts.json"

export async function create_post(post) {
    let data;
    let id;
    try {
        data = await readDBFile(path);
        if(data.length) {
            id = Number(data[data.length - 1].id) + 1
        } else {
            id = 1
        }
        data.push({...post , id});
    } catch (error) {
        console.log({ "createPost error - (read)": error });
        return false;
    }
    try {
        await writeDBFile(path, data)
        return true;
    } catch (error) {
        console.log({ "createPost error - (write)": error });
        return false;
    }
}

export async function read_posts() {
    try {
        return await readDBFile(path);
    } catch (error) {
        console.log({ "readPosts error": error });
        return false;
    }
}

export async function update_post(post) {
    let data;
    try {
        data = await readDBFile(path);
    } catch (error) {
        console.log({ "updatePost error - (read)": error });
        return false;
    }
    try {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == post.id) {
                data[i] = { ...data[i], ...post };
                break;
            }
        }
        await writeDBFile(path, data);
    } catch (error) {
        console.log({ "updatePost error - (write)": error });
        return false;
    }
    return true;
}

export async function delete_post(id) {
    let data;
    let index;
    try {
        data = await readDBFile(path)
    } catch (error) {
        console.log({ "deletePost error - (read)": error })
        return false;
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            index = i
            break;
        }
    }
    try {
        data.splice(index, 1);
        await writeDBFile(path, data);
    } catch (error) {
        console.log({"deletePost error - (write)" : error})
        return false;
    }
    return true;
}