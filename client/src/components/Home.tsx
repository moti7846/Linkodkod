import Post from "./Post"
import "./styles/Home.css"
const posts = [
    {
        "urlToImg": "https://livedoor.blogimg.jp/news4vip2/imgs/9/b/9b627530-s.png",
        "description": "post 1",
        "likes": 7,
        "namePost": "google"
    },
    {
        "urlToImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaS9dW15PMOAWf9oneAPmq-Fys0W8w3nPXC7wZ36CROlJ3tkNFb0_9uz5CI7h98cHIzOUupljRsENdsXzDLtFfJ-mMB_KHcl7TjZGD8qoXg",
        "description": "post 2",
        "likes": 6,
        "namePost": "google"
    },
    {
        "urlToImg": "https://gizmodo.com/app/uploads/2022/06/94d1a3b9f59f1c0c002864e8defbca1b.jpg",
        "description": "post 3",
        "likes": 9,
        "namePost": "google"
    },
    {
        "urlToImg": "https://img.vz.ru/upimg/soc/soc_1355073.png",
        "description": "post 4",
        "likes": 2,
        "namePost": "google"
    }
]
export default function Home() {
    return (
        <div className="grid-cards home">
            {posts.map((p) => (<Post urlToImg={p.urlToImg} description={p.description} likes={p.likes} namePost={p.namePost} />))}
        </div>
    )
}
