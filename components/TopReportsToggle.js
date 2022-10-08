function TopReportsToggle() {
  return (
    <div className="top-reports-toggle">
      <div class="flex flex-col">
        <button class="mt-4 h-2 w-1/4 rounded-xl p-1 bg-[lightgrey]"></button>

        <div class="m-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex grid grid-cols-3 items-start rounded-xl bg-white p-4 shadow-lg">
            <div class="flex h-12 w-15 items-center justify-center">
              <img src="/images/hazard-icon.svg"></img>
            </div>

            <div class="ml-4">
              <h2 class="font-semibold">Top Reporting</h2>
              <p class="mt-2 text-sm text-gray-500">Glades Exit</p>
              <p class="mt-2 text-sm text-gray-500">Flooding</p>
            </div>
            <div class="ml-4">
              <h2>100 New Reports</h2>
              <a href="#">View More</a>
            </div>
          </div>

          <div class="flex grid grid-cols-3 items-start rounded-xl bg-white p-4 shadow-lg">
            <div class="flex h-12 w-15 items-center justify-center">
              <img src="/images/road-icon.svg"></img>
            </div>

            <div class="ml-4">
              <h2 class="font-semibold">Top Reporting</h2>
              <p class="mt-2 text-sm text-gray-500">24th St.</p>
              <p class="mt-2 text-sm text-gray-500">Pot Hole</p>
            </div>
            <div class="ml-4">
              <h2>100 New Reports</h2>
              <a href="#">View More</a>
            </div>
          </div>
        </div>
        <button class="mb-2 font-bold">View More</button>
      </div>
    </div>
  );
}

export default TopReportsToggle;
