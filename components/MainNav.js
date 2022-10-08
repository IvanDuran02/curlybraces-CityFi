import Link from "next/Link";

function MainNav() {
    return (
      <div>
        {/*Navigation bar*/}
        <nav className="flex justify-around space-x-2 text-2xl pb-2">
                <ul>
                    <li>
                        <Link href='#'>Summaries</Link>
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