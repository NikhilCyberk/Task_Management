import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// make login page in react

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-purple-900 text-white min-h-screen">
      <Navbar />
      {/* <div>
                <div className="h-screen w-full">
                    <div className="h-full w-full flex items-center justify-center ">
                        <div className="h-full w-full ">
                            <div
                                className="flex flex-col p-4  h-full bg-center bg-cover items-center justify-center w-full gap-6  bg-opacity-10 backdrop-blur-xl"
                            >
                                <FcParallelTasks className='text-8xl' />
                                <h1 className="my-6 text-4xl text-purple-300">
                                    Task Management
                                </h1>
                                <ul className="inline-flex items-center text-xl gap-10">
                                    <li>
                                        <MdTaskAlt className='
                                    text-4xl text-purple-300' />
                                    </li>
                                    <li>
                                        <MdTaskAlt className='
                                    text-4xl text-purple-300' />
                                    </li>
                                    <li>
                                        <MdTaskAlt className='
                                    text-4xl text-purple-300' />
                                    </li>

                                </ul>
                                <p className="text-white text-right">use email your account</p>
                                <input
                                    type="username"
                                    name="username"
                                    id="username"
                                    className="bg-white/50 hover:bg-white lg:bg-white placeholder:text-violet-500 placeholder:text-sm text-violet-500 py-3 px-5 focus:text-violet-500 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
                                    placeholder="Enter Your username Here!"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-white/50 hover:bg-white md:bg-white placeholder:text-violet-500 placeholder:text-sm text-violet-500 py-3 px-5 focus:text-violet-500 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
                                    placeholder="Enter Your Email Here!"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="bg-white/50 hover:bg-white md:bg-white placeholder:text-violet-500 placeholder:text-sm text-violet-500 py-3 px-5 focus:text-violet-500 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
                                    placeholder="Enter Your Password Here!"
                                />
                                <div className="text-right">
                                    <a
                                        href=""
                                        className="italic text-white/50 text-sm underline decoration-violet-500 text-violet-500 hover:text-white hover:text-violet-700 transition"
                                    >Forget your Password?</a
                                    >
                                </div>
                                <button
                                    className="px-6 py-2 bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-32 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-[16]">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
            <label className="mr-1 text-purple-400">SignIn with</label>
            <button
              type="button"
              className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <BiLogoFacebook
                size={20}
                className="flex justify-center items-center w-full"
              />
            </button>
            <button
              type="button"
              className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <AiOutlineTwitter
                size={20}
                className="flex justify-center items-center w-full"
              />
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              Or
            </p>
          </div>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don&apos;t have an account?{" "}
            <Link
              className="text-red-600 hover:underline hover:underline-offset-4"
              to="/signup"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
