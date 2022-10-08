import Link from "next/Link";

function MainNav() {
    return (
      <div>
        {/*Navigation bar*/}
        <nav className="isolate fixed bottom-0 flex space-x-2 text-3xl">
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