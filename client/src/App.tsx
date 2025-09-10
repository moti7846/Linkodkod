import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import PostById from './components/PostById'
import InputIdPost from './components/InputIdPost'
import NewPost from './components/NewPost'
import { createContext, useContext, useState } from 'react'
import Entry from './components/Entry'

export const UserContext = createContext<{ user : string, setUser : any }>({user : "", setUser : null});
function App() {
  const [user, setUser] = useState(useContext(UserContext))
  return (
    <UserContext.Provider value={{...user , setUser}}>
      { user &&
        < Layout >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/post/:id" element={<PostById />} />
            <Route path="/form-by-id" element={<InputIdPost />} />
            <Route path="/create-new-post" element={<NewPost />} />
          </Routes>
        </ Layout >
      }
      {
        !user && <Entry />
      }
    </UserContext.Provider>
  )
}

export default App
