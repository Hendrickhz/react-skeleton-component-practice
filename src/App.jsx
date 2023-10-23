import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from './components/Users'
import Posts from './components/Posts'

const App = () => {
  return (
    <div className=' container w-[80%] mx-auto mt-[2%] min-h-screen '>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/users/:id/posts' element={<Posts/>}/>
      </Routes>
    </div>
  )
}

export default App
