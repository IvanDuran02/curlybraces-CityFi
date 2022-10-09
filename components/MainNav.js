import Link from "next/Link";

function MainNav() {
    return (
      <div>
        {/*Navigation bar*/}
        <nav className="fixed bottom-0 flex justify-evenly space-x-2 text-2xl pb-2">
                <ul>
                    <li>
                        <img/>
                        <Link href='assets\issues.png'>Issues</Link>
                        
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href='#'>Locations</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href='#'>Account</Link>
                    </li>
                </ul>
        </nav>
      </div>
    )
  }
  
  export default MainNav