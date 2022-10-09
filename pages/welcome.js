function welcome() {
    return (
        <div>
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
            <div className="flex mt-14">
                <p className="font-mono text-2xl text-center p-4">Helping connect the community and <br/> the local goverment</p>
            </div>
            <div className="flex justify-center mt-20">
                <button className="font-mono text-lg border-solid rounded-sm">Sign up</button>
            </div>
        </div>
    )

}

export default welcome;