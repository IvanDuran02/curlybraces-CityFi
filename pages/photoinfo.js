import React from "react";

const photoinfo = () => {
   let selectedCategory = 0
   return (
    <div className="flex flex-col justify-start items-center">
      <div className="py-2 px-2">
        <img
          className="bg-contain w-38 rounded-md"
          src="https://assets.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/blog/images/2019/03/highway-with-potholes-and-snow.jpeg"
          alt="pot hole"
        />
      </div>
        <div className="border-2 border-[#C4C4C454] rounded-md p-4">
      <div>
        <h1 className="underline font-bold text-2xl mb-3">Your photo information</h1>
      </div>

      <div>
        <ul>
          <li className="mb-3">
            <span className="font-bold">Date:</span> October 9, 2022
          </li>
          <li className="mb-3">
            <span className="font-bold">Location:</span> 223456., 234234.00
          </li>
          <li className="mb-3">
            <span className="font-bold">Address:</span> 6708 Southwest 78th
            Hollywood,FL
          </li>
        </ul>
      </div>
<div className="flex space-x-11 mt-3 mb-3 justify-center items-center w-56">
  <div className="flex flex-col justify-center items-center">
      <svg className="w-12 h-12"
        width="45"
        height="28"
        viewBox="0 0 45 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      
        <path
          d="M37.4958 1.99996C37.25 1.16663 36.2667 0.666626 35.0375 0.666626H24.9583L25.45 5.66663H19.55L20.0417 0.666626H9.71667C8.4875 0.666626 7.50417 1.33329 7.25834 1.99996L0.620836 25.3333C0.375002 26.3333 1.60417 27.3333 3.07917 27.3333H17.5833L18.3208 19H26.6792L27.4167 27.3333H41.675C43.15 27.3333 44.3792 26.3333 44.1333 25.3333L37.4958 1.99996ZM18.5667 15.6666L19.0583 8.99996H25.45L25.9417 15.6666H18.5667Z"
          fill="#E21717"
        />
      </svg>
      <p className="text-center">Road Blocker</p>
      </div>
        
      <div className="flex flex-col justify-center items-center">
        <svg className="w-12 h-12"
          width="47"
          height="39"
          viewBox="0 0 47 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.44773 32.0686L8.46 34.5682L12.3055 31.395L9.27182 28.8777M23.5 8.86364C16.4286 8.86364 10.6818 13.6323 10.6818 19.5C10.6818 25.3677 16.4286 30.1364 23.5 30.1364C30.5714 30.1364 36.3182 25.3677 36.3182 19.5C36.3182 13.6145 30.5714 8.86364 23.5 8.86364ZM40.5909 21.2727H47V17.7273H40.5909M34.6945 31.395L38.54 34.5682L41.5523 32.0686L37.7282 28.8777M41.5523 7.09091L38.54 4.60909L34.6945 7.78227L37.7282 10.2995M25.6364 0H21.3636V5.31818H25.6364M12.3055 7.78227L8.46 4.60909L5.44773 7.09091L9.27182 10.2995L12.3055 7.78227ZM0 21.2727H6.40909V17.7273H0M25.6364 33.6818H21.3636V39H25.6364"
            fill="#FF9900"
          />
        </svg>
        <p className="text-center">Sunny</p>
        </div>
       
      </div>
      </div>
     <div className=" flex flex-row gap-x-1">


      </div>
    <div>
    <div className="flex justify-center p-3">
  <div className="mb-3 xl:w-96">
    <select  defaultValue={selectedCategory} className="form-select appearance-none
      block
      w-full
      px-[100px]
      py-2.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option value="0" className="categories" >Categories</option> 

        <option value="1">Hazards</option>
        <option value="2">Residential</option>
        <option value="3">Street</option>
    </select>
  </div>
</div>
     


    </div>

    <div> 
      <textarea
  name="textarea"
  rows="5"
  cols="30"
  placeholder="Please add your description"></textarea>


    </div>
    </div>
  );
};

export default photoinfo;
