import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-purple-900 text-white min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Landing Page Content */}
      <header className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Streamline Your Task Management
          </h1>
          <p className="text-lg md:text-xl mb-12">
            Effortlessly organize your tasks and boost your productivity.
          </p>
          <div className="flex justify-center mb-16">
            <Link
              to="/signup"
              className="bg-purple-600 text-white px-8 py-4 rounded-md hover:bg-purple-700 transition-colors duration-300 mr-4 shadow-lg"
            >
              Get Started
            </Link>
            <Link to="/login" className="text-white hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Key Features Cards */}
            <div className="flex items-center bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                {/* Icon */}
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
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Organize Your Tasks
                </h3>
                <p className="text-sm">
                  Efficiently manage and organize your tasks.
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                {/* Icon */}
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
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Collaborate with Team
                </h3>
                <p className="text-sm">
                  Efficiently manage and organize your tasks.
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                {/* Icon */}
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
              <div>
                <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
                <p className="text-sm">
                  Efficiently manage and organize your tasks.
                </p>
              </div>
            </div>
            {/* Repeat for other key features */}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Why Choose Our Task Management App?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Why Choose Cards */}
            <div className="bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Intuitive Interface
              </h3>
              <p className="text-sm text-white">
                Our task management app features a clean and intuitive
                interface, making it easy to navigate and use..
              </p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Real-Time Collaboration
              </h3>
              <p className="text-sm text-white">
                Easily collaborate with your team and stay on top of shared
                tasks in real-time.
              </p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Powerful Analytics
              </h3>
              <p className="text-sm text-white">
                Gain valuable insights into your team's productivity and task
                progress with our advanced analytics.
              </p>
            </div>
            {/* Repeat for other why choose cards */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
