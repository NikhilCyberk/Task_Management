import React from 'react'

import { CgNotes } from "react-icons/cg"
import { MdLabelImportant } from "react-icons/md"
import { FaCheckDouble } from "react-icons/fa6"
import { TbNotebookOff } from "react-icons/tb"
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const data = [
        {
            title: "All task",
            icon: <CgNotes />,
            link: "/",
        },
        {
            title: "Important task",
            icon: <MdLabelImportant />,
            link: "/important-task",
        },
        {
            title: "Competed task",
            icon: <FaCheckDouble />,
            link: "/completed-task",
        },
        {
            title: "Incompleted task",
            icon: <TbNotebookOff />,
            link: "/incompleted-task",
        },
    ]

    return (
        <>
            <div>
                <h2 className='text-xl front-semibold'>the code master </h2>
                <h2 className='mb-1 text-purple-200'>email</h2>
                <hr />
            </div>
            <div>
                {data.map((items, i) => (
                    <Link
                        to={items.link}
                        key={i}
                        className='my-2 flex bg-purple-600 items-center w-full p-4 rounded-xl bg-opacity-10 backdrop-blur-md   text-white  transform hover:scale-105 hover:bg-purple-400  transition-all duration-300'>{items.icon} &nbsp;&nbsp; {items.title}</Link>
                ))}
            </div>
            <div>
                <button className='bg-orange-800 w-full p-4 bg-opacity-20 backdrop-blur-sm rounded-xl text-white hover:bg-orange-500 transition-all duration-300'> Logout</button>
            </div>
        </>



    )
}

export default Sidebar
