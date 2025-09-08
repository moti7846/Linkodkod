import { useEffect, useState } from "react"
import Post from "./Post"
import "./styles/Home.css"

export default function Home() {
    const [posts, setPost] : [Post[], React.Dispatch<React.SetStateAction<[]>>] = useState([])
    const [err, setErr] = useState(false)

    function getPosts() {
        fetch("http://localhost:3200/posts/all-posts")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            }).then(data => {
                setPost(data);
            })
            .catch(() => {
                setErr(true)
            });

    }
    useEffect(() => {
        getPosts()
        setPost([])
    }, [])

    return (
        <div className="grid-cards home">
            {posts.map((p) => (<Post urlToImg={`http://localhost:3200/${p.id}.png`} description={p.description} likes={p.likes} namePost={p.name} />))}
            {err && <h2>Error fetching data</h2>}
        </div>
    )
}

type Post = {
    id : string | number,
    description: string,
    likes: number,
    name: string
}