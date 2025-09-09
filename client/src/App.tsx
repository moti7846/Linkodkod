import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import PostById from './components/PostById'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/post/:id" element={<PostById />} />
      </Routes>
    </Layout>
  )
}

export default App
