import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import PostById from './components/PostById'
import InputIdPost from './components/InputIdPost'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/post/:id" element={<PostById />} />
        <Route path="/form-by-id" element={<InputIdPost />} />
      </Routes>
    </Layout>
  )
}

export default App
