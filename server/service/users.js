import { writeDBFile, readDBFile } from "../DAL/DAL.js";

const path = "./data/users.json"

export async function createUser(user) {
    let data;
    try {
        data = await readDBFile(path);
        data.push(user);
    } catch (error) {
        console.log({ "createUser error - (read)": error });
        return false;
    }
    try {
        await writeDBFile(path, data)
        return true;
    } catch (error) {
        console.log({ "createUser error - (write)": error });
        return false;
    }
}

export async function readUser(userName) {
    try {
        const users =  await readDBFile(path);
        const user = users.find((u) => u.userName === userName)
        return {user}
    } catch (error) {
        return {error};
    }
}

export async function readByName(name) {
  const { data, error } = await sb.from("players").select("*").eq("username", name).single();
  if (error)
    return { error };
  return data;
}

export async function updateUser(user) {
    let data;
    try {
        data = await readDBFile(path);
    } catch (error) {
        console.log({ "updateUser error - (read)": error });
        return false;
    }
    try {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == user.id) {
                data[i] = { ...data[i], ...user };
                break;
            }
        }
        await writeDBFile(path, data);
    } catch (error) {
        console.log({ "updateUser error - (write)": error });
        return false;
    }
    return true;
}

export async function deleteUser(id) {
    let data;
    let index;
    try {
        data = await readDBFile(path)
    } catch (error) {
        console.log({ "deleteUser error - (read)": error })
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
        console.log({ "deleteUser error - (write)": error })
        return false;
    }
    return true;
}