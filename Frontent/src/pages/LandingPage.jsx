import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-primary text-white">
            <header className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Streamline Your Task Management
                            </h1>
                            <p className="text-lg md:text-xl mb-8">
                                Effortlessly organize your tasks and boost your productivity.
                            </p>
                            <button className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary-dark transition-colors duration-300">
                                Get Started
                            </button>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <img
                                src="../assets/hero.png"
                                alt="Task Management"
                                className="w-full max-h-[400px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="flex items-center">
                            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Organize Your Tasks</h3>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Collaborate with Team</h3>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Track Progress</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;