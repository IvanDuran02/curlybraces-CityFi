function TopReportsToggle() {
  return (
    <div className="top-reports-toggle">
      <div className="flex flex-col">
        <div className="flex justify-center w-screen">
          <button className="mt-4 h-2 w-2/5 rounded-xl p-1 bg-[lightgrey]"></button>
        </div>
        <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="grid grid-cols-3 items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex h-12 w-15 items-center justify-center">
              <img src="/images/hazard-icon.svg"></img>
            </div>

            <div className="ml-4">
              <h2 className="font-semibold">Top Reporting</h2>
              <p className="mt-2 text-sm text-gray-500">Glades Exit</p>
              <p className="mt-2 text-sm text-gray-500">Flooding</p>
            </div>
            <div className="ml-4">
              <h2>100 New Reports</h2>
              <a href="#">View More</a>
            </div>
          </div>

          <div className="grid grid-cols-3 items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex h-12 w-15 items-center justify-center">
              <img src="/images/road-icon.svg"></img>
            </div>

            <div className="ml-4">
              <h2 className="font-semibold">Top Reporting</h2>
              <p className="mt-2 text-sm text-gray-500">24th St.</p>
              <p className="mt-2 text-sm text-gray-500">Pot Hole</p>
            </div>
            <div className="ml-4">
              <h2>100 New Reports</h2>
              <a href="#">View More</a>
            </div>
          </div>
        </div>
        <button className="font-bold">View More</button>
      </div>
    </div>
  );
}

export default TopReportsToggle;
