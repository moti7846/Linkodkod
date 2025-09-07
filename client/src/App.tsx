import Linkodkod from "./assets/Linkodkod.jpg"
import './App.css'
import Post from './components/Post'

function App() {
  return (
    <>
      <Post urlToImg={Linkodkod} description="dignissimos, dolorem repudiandae." likes={8} namePost="moti" timePost="12:00"/>
    </>
  )
}

export default App
