function welcome() {
    return (
        <div className="overflow-hidden">
            <div className="flex justify-center w-screen">
                <button className="mt-20 h-2 w-1/12 rounded-xl p-1 bg-[grey]"></button>
                <button className="mt-20 h-2 w-1/12 rounded-xl p-1 bg-[lightgrey]"></button>
            </div>
            <div className="flex justify-center mt-20">
                <img src="/images/cityfi-icon.png"/>
            </div>
            <div className="flex justify-center mt-16">
                <p className="font-mono font-bold text-5xl">Cityfi</p>
            </div>
            <div className="flex mt-14 justify-center">
                <p className="font-mono text-2xl text-center p-4">Helping connect the community and <br/> the local goverment</p>
            </div>
            <div className="flex justify-center mt-16">
            <button type="button" className="bg-[#FF9900] text-white px-[4rem] py-2 rounded-lg font-semibold text-xl mt-2">Sign up</button>
            </div>
            <div className="w-36 h-36 rounded-full bg-[#680E0E] absolute top-10 -left-20 opacity-80"/>
            <div className="w-36 h-36 rounded-full bg-[#2AD876] absolute -left-20 opacity-80"/>
            <div className="w-14 h-28 rounded-tl-full rounded-bl-full bg-[#187BA1] absolute top-52 left-[21rem] opacity-80"/>
        </div>
    )

}

export default welcome;