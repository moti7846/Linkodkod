import { useParams } from "react-router";
import Post from "./Post";
import "./styles/PostById.css"
import { useEffect, useState } from "react";

export default function PostById() {
    const { id } = useParams();
    const [post, setPost]: [any, React.Dispatch<React.SetStateAction<{}>>] = useState({});
    const [isError, setIsError]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    const [isLoader, setIsLoader]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(!isError);

    function getPost() {
        fetch(`http://localhost:3200/posts/post:${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP isError! status: ${response.status}`);
                }
                return response.json();
            }).then(data => {
                setIsLoader((p) => !p)
                setPost(data);
            })
            .catch(() => {
                setIsError(true)
                setIsLoader((p) => !p)
            });
    }
    useEffect(() => {
        getPost()
    }, [])
    return (
        <div className={`PostById ${isError && 'error'}`}>
            {
                isLoader && <span className="loader"></span>
            }

            {
                !isLoader && !isError && <Post urlToImg={`http://localhost:3200/${post.id}.png`} description={post.description} likes={post.likes} namePost={post.name} styleClass="post" id={post.id} />
            }

            {
                isError && <h2>Error fetching data</h2>
            }
        </div>
    )

}

type Post = {
    id: string | number,
    description: string,
    likes: number,
    name: string
}