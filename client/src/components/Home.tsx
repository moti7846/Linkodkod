import { useEffect, useState } from "react"
import Post from "./Post"
import "./styles/Home.css"

export default function Home() {
    const [posts, setPost] : [Post[], React.Dispatch<React.SetStateAction<[]>>] = useState([]);
    const [isError, setIsError] : [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    const [isLoader, setIsLoader] : [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(!isError);

    function getPosts() {
        fetch("http://localhost:3200/posts/all-posts")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP isError! status: ${response.status}`);
                }
                return response.json();
            }).then(data => {
                setTimeout(() => {
                    setIsLoader((p) => !p)
                    setPost(data);
                }, 5000);
            })
            .catch(() => {
                setIsError(true)
            });

    }
    useEffect(() => {
        getPosts()
        setPost([])
    }, [])

    return (
        <div className={`home ${!isError && !isLoader ? 'grid-cards' : 'error'}`}>
            {
                isLoader && <span className="loader"></span>
            }
            {
                !isError && posts.map((p) => (<Post urlToImg={`http://localhost:3200/${p.id}.png`} description={p.description} likes={p.likes} namePost={p.name} />))
            }

            {
                isError && <h2>Error fetching data</h2>
            }
        </div>
    )
}

type Post = {
    id : string | number,
    description: string,
    likes: number,
    name: string
}