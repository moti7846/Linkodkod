import { useState } from "react";
import "./styles/NewPost.css"

export default function NewPost() {
    const [msg, setMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function formNewPost(e : any) {
        setIsLoading(true)
        e.preventDefault();
        const [name, description, likes] = [e.target.name.value, e.target.description.value, e.target.likes.value]
        console.log(name)
        console.log(description)
        console.log(likes)
        const response = await fetch("http://localhost:3200/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, description, time : new Date().toLocaleString() , likes })
      })
      setTimeout(() => {
        setIsLoading(false)
        setMsg(response.statusText)
      }, 3000);
    }
  return (
    <div className="NewPost">
        <form onSubmit={formNewPost}>
            <h2>create new post</h2>
            <label htmlFor="name">name</label>
            <input type="text" required maxLength={20} id="name" />
            <label htmlFor="description">description</label>
            <input type="text" required maxLength={240} id="description" />
            <label htmlFor="likes">likes</label>
            <input type="number" min={0} id="likes" />
            <button type="submit">Create Post</button>
        { msg && <h3 className="msg">{msg}</h3> }
        { isLoading && <span className="loaderNewPost"></span> }
        </form>
    </div>
  )
}
