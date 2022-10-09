import Link from "next/Link";

function MainNav() {
  return (
    <div className="flex flex-col bottom-0">
      {/*Navigation bar*/}
      <nav>
        <div className="flex justify-around items-center w-screen h-[15vh]">
          <Link href="#">
            <div className="icon_wrapper">
              <div>
                <img className="w-10 h-10" src="/images/issues.png" />
              </div>
              <h2 className="m-3">Summaries</h2>
            </div>
          </Link>
          <Link href="../report.js">
            <div className="icon_wrapper">
              <div>
                <img className="w-10 h-10" src="/images/report.png" />
              </div>
              <h2 className="m-3">Reports</h2>
            </div>
          </Link>
          <Link href="#">
            <div className="icon_wrapper">
              <div>
                <img className="w-10 h-10" src="/images/account.png" />
              </div>
              <h2 className="m-3">Account</h2>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;
