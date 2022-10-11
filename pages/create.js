import Link from "next/link";

function create() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center w-screen space-x-2 max-w-[36rem]">
        <button className="mt-20 h-2 w-1/12 rounded-xl p-1 bg-[lightgrey]"></button>
        <button className="mt-20 h-2 w-1/12 rounded-xl p-1 bg-[grey]"></button>
      </div>
      <div className="md:w-[36rem]">
        <div className="flex justify-center mt-20">
          <p className="font-mono text-xl">Create Profile</p>
        </div>
        <form className="flex flex-col p-20 space-y-8 ">
          <input
            className="border-b border-black focus:border-l-2 border-l-[#E21717] outline-none focus:ring-0"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border-b border-black focus:border-l-2 border-l-[#E21717] outline-none focus:ring-0"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="border-b border-black focus:border-l-2 border-l-[#E21717] outline-none focus:ring-0"
            type="text"
            placeholder="Address"
          />
          <input
            className="border-b border-black focus:border-l-2 border-l-[#E21717] outline-none focus:ring-0"
            type="text"
            placeholder="Email"
          />
        </form>
      </div>
      <Link href="/">
        <div className="flex justify-center mt-16">
          <button
            type="button"
            className="bg-[#FF9900] text-white px-[4rem] py-2 rounded-lg font-semibold text-xl mt-2"
          >
            Confirm
          </button>
        </div>
      </Link>
      <div className="w-36 h-36 rounded-full bg-[#680E0E] absolute top-10 -left-20 opacity-80" />
      <div className="w-36 h-36 rounded-full bg-[#2AD876] absolute -left-20 opacity-80" />
      <div className="w-14 h-28 rounded-tl-full rounded-bl-full bg-[#187BA1] absolute top-52 left-[21rem] opacity-80" />
    </div>
  );
}

export default create;
