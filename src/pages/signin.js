/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const signin = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center w-screen space-x-2 max-w-[36rem]">
        <button className="mt-14 md:mt-20 h-2 w-1/12 rounded-xl p-1 bg-[lightgrey]"></button>
        <button className="mt-14 md:mt-20 h-2 w-1/12 rounded-xl p-1 bg-[grey]"></button>
      </div>
      <div className="w-96 flex flex-col justify-center items-center space-y-12 ">
        <div className="flex justify-center mt-20">
          <p className="font-mono text-xl">Create Profile</p>
        </div>
        <form className="flex flex-col space-y-8 py-4 w-72 md:w-[20rem]">
          <input
            className="border-b border-black focus:border-l-2 border-l-[#E21717] outline-none focus:ring-0 shadow-lg p-1 rounded-md"
            type="email"
            placeholder="Email"
          />
          <input
            className="border-b border-black focus:border-l-2 border-l-[#E21717] outline-none focus:ring-0 shadow-lg p-1 rounded-md"
            type="password"
            placeholder="Password"
          />
          <button type="submit" />
        </form>
        <div className="flex justify-center items-center">
          <hr className="text-black w-28" />
          <span className="mx-4 opacity-60">or</span>
          <hr className="text-black w-28" />
        </div>
        <div
          onClick={() => signIn()}
          className="flex justify-center items-center w-64 h-14 border-2 border-red-400 rounded-md text-black hover:text-white hover:bg-red-400 hover:scale-105 hover:transition-all shadow-lg hover:cursor-pointer hover:text-opacity-100 text-opacity-50"
        >
          <img
            src="/images/googleIcon.png"
            alt="Google Icon"
            className="w-10 h-10 p-2 -ml-4"
          />
          <h1 className="font-semibold">Sign In With Google</h1>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <button
          type="button"
          className="bg-[#FF9900] text-white px-[4rem] py-2 rounded-lg font-semibold text-xl mt-2 hover:cursor-pointer hover:scale-105 transition-all shadow-lg"
        >
          Confirm
        </button>
      </div>

      <div className="w-36 h-36 rounded-full bg-[#680E0E] absolute top-10 -left-20 opacity-80" />
      <div className="w-36 h-36 rounded-full bg-[#2AD876] absolute -left-20 bottom-20 opacity-80" />
      <div className="w-14 h-28 rounded-tl-full rounded-bl-full bg-[#187BA1] absolute top-52 right-0 opacity-80" />
    </div>
  );
};

export default signin;
