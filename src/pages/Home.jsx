import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-sm mx-4 min-h-screen border border-gray-300 flex flex-col justify-end p-6 mt-5 mb-5">
        <h1 className="text-2xl font-bold mb-2 text-left">Welcome to PopX</h1>
        <p className="text-gray-500 text-left mb-6 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <div className="flex flex-col gap-3">
          <a href="/signup">
            <button className="cursor-pointer w-full bg-violet-600 text-white py-3 rounded-md font-semibold text-base">Create Account</button>
          </a>
          <a href="/login">
            <button className="cursor-pointer w-full bg-violet-200 text-violet-800 py-3 rounded-md font-semibold text-base">Already Registered? Login</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
