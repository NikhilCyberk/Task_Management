import React, { useState } from "react";

import { CiHeart } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";


const Cards = ({ home, setInputDiv }) => {
    const data = [
        {
            id: 1,
            title: "Complete Project Report",
            description:
                "Compile and finalize the project report including all sections such as introduction, methodology, results, discussion, and conclusion. Make sure to include all necessary data, graphs, and analysis.",
            status: "incomplete"
        },
        {
            id: 2,
            title: "Prepare Presentation Slides",
            description:
                "Create visually appealing presentation slides summarizing key points of the project. Include relevant images, charts, and bullet points for clarity.",
            status: "incomplete"
        },
        {
            id: 3,
            title: "Review Codebase",
            description:
                "Review and analyze the codebase for any bugs, optimizations, or improvements. Document any issues found and propose solutions.",
            status: "incomplete"
        },
        {
            id: 4,
            title: "Conduct User Testing",
            description:
                "Plan and conduct user testing sessions to gather feedback on the usability and functionality of the product. Document user feedback and suggest enhancements.",
            status: "incomplete"
        },
        {
            id: 5,
            title: "Optimize Website Performance",
            description:
                "Identify and implement optimizations to improve website loading speed, user experience, and overall performance. Utilize tools like Lighthouse and GTmetrix for analysis.",
            status: "incomplete"
        },
        {
            id: 6,
            title: "Create Marketing Campaign",
            description:
                "Develop a comprehensive marketing campaign including social media posts, email newsletters, and promotional offers. Monitor campaign performance and adjust strategies as needed.",
            status: "complete"
        },
        {
            id: 7,
            title: "Organize Team Meeting",
            description:
                "Schedule and organize a team meeting to discuss project progress, upcoming tasks, and any roadblocks. Share updates and collaborate on solutions.",
            status: "incomplete"
        },
        {
            id: 8,
            title: "Write Blog Post",
            description:
                "Craft an engaging blog post on a relevant industry topic. Conduct research, outline key points, and create compelling content with SEO optimization.",
            status: "incomplete"
        },
        {
            id: 9,
            title: "Update Documentation",
            description:
                "Review and update project documentation including user manuals, technical guides, and API documentation. Ensure information is accurate and up to date.",
            status: "complete"
        },
        {
            id: 10,
            title: "Test Mobile App Compatibility",
            description:
                "Test the mobile app on various devices and screen sizes to ensure compatibility and responsiveness. Address any issues related to UI/UX and functionality.",
            status: "incomplete"
        },
    ];
    const [card, setCard] = useState(data);

    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            {data &&
                data.map((items, i) => (
                    <div className="flex flex-col justify-between rounded-xl p-4 bg-purple-900 shadow-lg transform  hover:bg-purple-600 duration-300 ">
                        <div>
                            <h3 className="text-2xl font-semiold">{items.title}</h3>
                            <hr />
                            <p className="text-purple-200">{items.description}</p>
                        </div>
                        <div className="mt-4 w-full flex items-center">
                            <button class={` ${items.status === "incomplete" ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"} inline-flex items-center px-4 py-2 transition ease-in-out delays-75  text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110`}>
                                {items.status}
                            </button>
                            <div className="text-whiite p-2 w-3/6 text-2xl font-semibold flex justify-around ">
                                <button className="hover:scale-150">
                                    <CiHeart />
                                </button>

                                <button className="hover:scale-150">
                                    <FaEdit />
                                </button>
                                <button className="hover:scale-150">
                                    <RiDeleteBin2Line />
                                </button>
                            </div>
                        </div>
                    </div >
                ))}
            {home === "true" && (

                <button className="flex flex-col justify-center rounded-xl items-center p-4 bg-purple-900 shadow-lg transform  hover:bg-yellow-600 hover:cursor-pointer transition-all duration-300 " onClick={() => setInputDiv("fixed")}>
                    <SiAddthis className="text-5xl" />
                    <h3 className="text-2xl mt-4 ">Add task</h3>
                </button>
            )}
        </div >
    );
};

export default Cards;
