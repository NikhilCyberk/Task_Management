import React from "react";
import { FaWindowClose } from "react-icons/fa";

const InputData = ({ InputDiv, setInputDiv }) => {
    const handleClick = () => {
     
        setInputDiv("hidden");
    };

    return (
        <>
            <div
                className={`${InputDiv} top-0 bg-purple-100 bg-opacity-20 backdrop-blur h-screen w-full`}
            ></div>
            <div
                className={`${InputDiv} top-0 flex items-center justify-center h-screen w-full`}
            >
                <div className="w-3/6 mx-auto relative overflow-hidden z-10 bg-gray-800 p-4 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
                    <div className="w-full flex justify-end p-4">
                        <button onClick={handleClick}
                            className="text-3xl text-purple-400 hover:text-yellow-600 hover:cursor-pointer transition-all duration-300"

                        >
                            <FaWindowClose />
                        </button>
                    </div>

                    <div class="mb-4">
                        <input
                            class="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                            placeholder="Title"
                            name="title"
                            type="text"
                        />
                    </div>
                    <div class="mb-4">
                        <textarea
                            class="my-3 py-2 px-3 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                            cols="30"
                            rows="10"
                            name="Description"
                            id="Description"
                            placeholder="Description..."
                        ></textarea>
                    </div>

                    <div class="flex justify">
                        <button
                            class="bg-gradient-to-r from-purple-700 via-purple-500 to-blue-600 text-gray-200 px-4 py-2 font-semibold rounded-md hover:opacity-80"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InputData;
