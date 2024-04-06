import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AllTask from './pages/AllTask'
import ImportantTask from './pages/ImportantTask'
import CompleteTask from './pages/CompleteTask'
import IncompletedTask from './pages/IncompletedTask'
import Signup from './pages/Signup'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'

function App() {


  return (
    <>
      {/* <div className='bg-purple-900  text-white h-screen p-2  bg-gradient-to-b from-gray-900 to-black-900 relative'> */}
      <div className="max-w mx-auto h-screen p-2 relative overflow-hidden z-10 bg-gray-800 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route exact path='/home' element={<Home />} >
              <Route index element={<AllTask />} />
              <Route path='/home/important-task' element={<ImportantTask />} />
              <Route path='/home/completed-task' element={<CompleteTask />} />
              <Route path='/home/incompleted-task' element={<IncompletedTask />} />
            </Route>

            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />

          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
