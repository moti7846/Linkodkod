import "./styles/NewPost.css"

export default function NewPost() {
    async function formNewPost(e : any) {
        e.preventDefault();
        const [name, description, img] = [e.target.name.value, e.target.description.value, e.target.img.value]
        console.log(name)
        console.log(description)
        console.log(img)
        const response = await fetch("http://localhost:3200/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, description, time : new Date().toLocaleString() , img })
      })
      console.log(response)
    }
  return (
    <div className="NewPost">
        <form onSubmit={formNewPost}>
            <h2>create new post</h2>
            <label htmlFor="name">name</label>
            <input type="text" minLength={5} maxLength={20} id="name" />
            <label htmlFor="description">description</label>
            <input type="text" id="description" />
            <label htmlFor="img">image</label>
            <input type="file" accept="image/png" id="img" />
            <button type="submit">Create Post</button>
        </form>
    </div>
  )
}
