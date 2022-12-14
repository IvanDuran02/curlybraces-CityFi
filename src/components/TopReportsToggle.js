import React, { useState } from "react";

function TopReportsToggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="top-reports-toggle">
      <div className="flex flex-col">
        {!toggle ? (
          <div className="flex justify-center w-screen">
            <div
              onClick={() => setToggle(!toggle)}
              className="mt-2 h-2 w-2/5 rounded-xl m-4 bg-[lightgrey] max-w-xs"
            />
          </div>
        ) : (
          <>
            <div className="flex justify-center w-screen">
              <div
                onClick={() => setToggle(!toggle)}
                className="mt-2 h-2 w-2/5 rounded-xl m-4 bg-[lightgrey] max-w-xs"
              />
            </div>
            <div className="grid grid-cols-1 gap-2 md:flex justify-center items-center md:space-x-24">
              <div className="grid grid-cols-3 rounded-xl bg-white p-2 shadow-lg max-w-xl items-center md:p-4">
                <div className="flex h-12 w-15 items-center justify-center">
                  <img
                    className="w-14 h-16"
                    src="/images/hazard-icon.svg"
                    alt="harzard-icon"
                  />
                </div>

                <div className="ml-4">
                  <h2 className="font-medium">Top Reporting</h2>
                  <p className="text-sm text-gray-500">Glades Exit</p>
                  <p className="text-sm text-gray-500">Flooding</p>
                </div>
                <div className="ml-4">
                  <h2>100 New Reports</h2>
                  <a href="#">View More</a>
                </div>
              </div>

              <div className="grid grid-cols-3 items-center rounded-xl bg-white p-2 shadow-lg max-w-xl md:p-4 md:m-4">
                <div className="flex h-12 w-15 items-center justify-center">
                  <img
                    className="w-14 h-14"
                    src="/images/road-icon.svg"
                    alt="road-icon"
                  />
                </div>

                <div className="ml-4">
                  <h2 className="font-semibold">Top Reporting</h2>
                  <p className="text-sm text-gray-500">24th St.</p>
                  <p className="text-sm text-gray-500">Pot Hole</p>
                </div>
                <div className="ml-4">
                  <h2>100 New Reports</h2>
                  <a href="#">View More</a>
                </div>
              </div>
            </div>
            <button className="font-bold">View More</button>
          </>
        )}
      </div>
    </div>
  );
}

export default TopReportsToggle;
