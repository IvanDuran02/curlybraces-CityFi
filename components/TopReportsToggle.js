function TopReportsToggle() {
  return (
    <div className="top-reports-toggle">
      <div className="flex flex-col">
        <button
          id="toggle-top-reports"
          className="toggle-reports mt-4 h-2 w-1/4 rounded-xl p-1 bg-[lightgrey]"
        ></button>

        <div
          id="top-reports"
          className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <div className="flex grid grid-cols-3 items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex mt-4 h-12 w-10 items-center justify-center">
              <img class="h-5" src="/images/hazard-icon.svg"></img>
            </div>

            <div className="top-report-section">
              <h2 className="font-semibold">Top Reporting</h2>
              <p className="mt-2 text-sm text-gray-500">Glades Exit</p>
              <p className="mt-2 text-sm text-gray-500">Flooding</p>
            </div>
            <div className="ml-4">
              <h2>100 New Reports</h2>
              <a className="top-report-card-link" href="#">
                View More
              </a>
            </div>
          </div>

          <div className="flex grid grid-cols-3 items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex mt-4 h-12 w-10 items-center justify-center">
              <img class="h-5" src="/images/road-icon.svg"></img>
            </div>

            <div className="top-report-section">
              <h2 className="font-semibold">Top Reporting</h2>
              <p className="mt-2 text-sm text-gray-500">24th St.</p>
              <p className="mt-2 text-sm text-gray-500">Pot Hole</p>
            </div>
            <div className="ml-4">
              <h2>100 New Reports</h2>
              <a className="top-report-card-link" href="#">
                View More
              </a>
            </div>
          </div>
        </div>
        <button className="mb-2 font-bold">View More</button>
      </div>
    </div>
  );
}

export default TopReportsToggle;
