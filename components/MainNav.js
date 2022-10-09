import Link from "next/link";

function MainNav() {
  return (
    <div className="flex flex-col bottom-0">
      {/*Navigation bar*/}
      <nav>
        <div className="flex justify-around items-center w-screen h-[10vh] pb-2">
          <Link href="#">
            <div className="icon_wrapper">
              <div>
                <img className="w-10 h-10" src="/images/issues.png" />
              </div>
              <h2 className="m-2">Summaries</h2>
            </div>
          </Link>
          <Link href="/photoinfo">
            <div className="icon_wrapper">
              <div>
                <img className="w-10 h-10" src="/images/report.png" />
              </div>

              <h2 className="m-2">Reports</h2>

            </div>
          </Link>
          <Link href="#">
            <div className="icon_wrapper">
              <div>
                <img className="w-10 h-10" src="/images/account.png" />
              </div>

              <h2 className="m-2">Account</h2>

            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;
