import fs from "fs"

export function writeDBFile(path, data) {
    data = JSON.stringify(data)
    return new Promise((resolve, reject) => {
         fs.writeFile(path, data ,(err) => {
            if(err){
                reject(`Error adding riddle: ${err}`)
            }
            resolve("The posts was added successfully.")
         })
    })
}

export function readDBFile(path) {
    return new Promise((resolve, reject) => {
            fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                reject(err)
            }
            try {
                resolve(JSON.parse(data))
            } catch (error) {
                console.log({"readDBFile error" : error});
            }
            })
    })
}