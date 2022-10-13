import Link from "next/link";
import React from "react";

const photoinfo = () => {
  let selectedCategory = 0;
  return (
    <div className="flex flex-col justify-start items-center max-w-[384px">
      <div className="py-2 px-2">
        <img
          className="bg-contain w-[24rem] rounded-md h-[15rem]"
          src="https://assets.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/blog/images/2019/03/highway-with-potholes-and-snow.jpeg"
          alt="pot hole"
        />
      </div>
      <div className="border-2 border-[#C4C4C454] rounded-md p-4">
        <div>
          <h1 className="underline font-bold text-2xl mb-3 text-center">
            Your photo information
          </h1>
        </div>

        <div>
          <ul>
            <li className="mb-3">
              <span className="font-bold pl-4">Date:</span> October 9, 2022
            </li>
            <li className="mb-3">
              <span className="font-bold pl-4">Location:</span> 22.3456,
              23.423400
            </li>
            <li className="mb-3">
              <span className="font-bold pl-4">Address:</span> 6708 Southwest
              78th Hollywood,FL
            </li>
          </ul>
        </div>
        <div className="flex mt-3 mb-3 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-12 h-12 "
              src="/images/hazard-icon.svg"
              alt="harzard-image"
            />
            <p className="text-center w-24">Hazard</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img
              className="w-12 h-12"
              src="/images/road-icon.svg"
              alt="road-icon"
            />
            <p className="text-center w-24">Road Block</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-row gap-x-1"></div>
      <div>
        <div className="flex justify-center p-3">
          <div className="mb-3 xl:w-96">
            <select
              defaultValue={selectedCategory}
              className="form-select appearance-none
      block
      w-screen
      max-w-[384px]
      py-2.5
      text-center
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="0" className="flex justify-start">
                Categories
              </option>
              <option value="1">Hazards</option>
              <option value="2">Residential</option>
              <option value="3">Street</option>
            </select>
            <img
              className="w-4 h-4 absolute right-20 bottom-[17rem] hidden"
              src="/images/carrot.png"
              alt="carrot"
            />
          </div>
        </div>
      </div>

      <div>
        <textarea
          name="textarea"
          rows="40"
          cols="30"
          placeholder="Please add your description"
          className="border-2 border-[#C4C4C454] w-screen h-[8rem] max-w-[384px] text-center"
        ></textarea>
      </div>

      <Link href="/">
        <div>
          <button
            type="button"
            className="bg-[#FF9900] text-white px-[4rem] py-2 md:py-4 rounded-lg font-semibold text-xl mt-2 w-screen max-w-[384px]"
            onClick={() => {
              alert("Thanks for reporting this Issue!");
            }}
          >
            Submit Photo
          </button>
        </div>
      </Link>
    </div>
  );
};

export default photoinfo;
