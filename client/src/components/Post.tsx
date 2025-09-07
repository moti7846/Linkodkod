export default function Post({urlToImg, description, likes, namePost}: postProps) {
    return (
        <div className="card-post">
            <img src={urlToImg} />
            <span>{description}</span>
            <p>{likes} ❤️</p>
            <p>{namePost}</p>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    )
}

type postProps = {
    urlToImg: string
    description: string
    likes: number
    namePost: string
};
