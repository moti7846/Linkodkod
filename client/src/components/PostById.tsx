import { useParams } from "react-router";
import Post from "./Post";
import "./styles/PostById.css"

export default function PostById() {
    const { id } = useParams();
    const p = {
        "id": id,
        "name": "moti-test",
        "description": "test post",
        "time": "18:55",
        "likes": 18,
        "img": ""
    }
    return (
        <div className="PostById">
            <Post urlToImg={`http://localhost:3200/${p.id}.png`} description={p.description} likes={p.likes} namePost={p.name} styleClass="post" />
        </div>
    )
}
