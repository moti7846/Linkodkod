import "./styles/Post.css"

export default function Post({ urlToImg, description, likes, namePost, styleClass }: postProps) {
    return (
        <div className={styleClass || 'card-post'}>
            <img id="imgPost" src={urlToImg} />
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
};
