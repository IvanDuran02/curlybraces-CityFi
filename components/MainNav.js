import Link from "next/Link";

function MainNav() {
    return (
      <div className="flex flex-col fixed bottom-0">
        {/*Navigation bar*/}
        <nav>
            <div className="flex justify-around items-center w-screen h-[15vh]">            
            <Link href="#">
            <div className="icon_wrapper">
                <div>
                <img src="/images/issues.png" />
                </div>
                <h2>Summaries</h2>
            </div>
            </Link>
            <Link href='#'>
            <div className="icon_wrapper">
                <div>
                <img src="/images/report.png" />
                </div>
                <h2>Locations</h2> 
            </div>
            </Link>
            <Link href='#'>
            <div className="icon_wrapper">
                <div>
                <img src="/images/account.png" />
                </div>
                <h2>Account</h2>
            </div>
            </Link>
            </div>

        </nav>
      </div>
    )
  }
  
  export default MainNav