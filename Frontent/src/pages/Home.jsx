import React from 'react'
import Sidebar from '../components/Home/Sidebar'
import { Outlet } from "react-router-dom"

const Home = () => {
    return (
        <div className='flex h-[98vh] gap-4'>
            <div className='w-1/6 border-purple-900 rounded-2xl p-4 flex flex-col justify-between bg-gray-300   bg-opacity-10 backdrop-blur-xl  '><Sidebar /></div>
            <div className='w-5/6 border-purple-900 rounded-2xl p-4 flex flex-col justify-between bg-gray-100   bg-opacity-10 backdrop-blur-xl '><Outlet /></div>
        </div>

        // <div className="bg-gradient-to-b from-gray-200 to-gray-400 h-screen flex items-center justify-center">
        //     <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-xl">
        //         <h1 className="text-3xl font-semibold text-white mb-4">Glass Effect with Tailwind CSS</h1>
        //         <p className="text-white">This is a sample text demonstrating the glass effect using Tailwind CSS.</p>
        //     </div>
        // </div>



    )
}

export default Home
