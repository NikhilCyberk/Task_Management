import React from 'react'
import Cards from '../components/Home/Cards'
import { SiAddthis } from "react-icons/si";
import InputData from '../components/Home/InputData';
import { useState } from 'react';

const AllTask = () => {
    const [InputDiv, setInputDiv] = useState("hidden")

    const handleClick = () => {

        setInputDiv("fixed");
    };

    return (
        <>
            <div>
                <div className='w-full flex justify-end p-4'>
                    <button onClick={handleClick}>
                        <SiAddthis className='text-5xl text-purple-400 hover:text-yellow-600 hover:cursor-pointer transition-all duration-300' />
                    </button>
                </div>
                <Cards home={"true"} setInputDiv={setInputDiv} />
            </div>
            <InputData InputDiv={InputDiv} setInputDiv={setInputDiv} />
        </>
    )
}

export default AllTask
