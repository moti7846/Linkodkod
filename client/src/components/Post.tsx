import { useNavigate } from "react-router";
import "./styles/Post.css"

export default function Post({ urlToImg, description, likes, namePost, styleClass , id }: postProps) {
    const navigate = useNavigate();
    return (
        <div className={styleClass || 'card-post'}>
            <img id="imgPost" onClick={() => navigate(`/post/${id}`)} src={urlToImg} alt={`img post ${namePost}`} />
            <span id="descriptionPost">{description}</span>
            <p id="likesPost">{likes} ❤️</p>
            <p id="namePost">{namePost}</p>
            <p id="timePost">{new Date().toLocaleTimeString()}</p>
        </div>
    )
}

type postProps = {
    urlToImg: string
    description: string
    likes: number
    namePost: string
    styleClass?: string
    id : string | number
};
