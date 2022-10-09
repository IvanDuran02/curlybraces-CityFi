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
            <div className="flex justify-center">
                <h1 className="text-5x1">Cityfi</h1>
            </div>
        </div>
    )

}

export default welcome;