import "./Navbar.scss"
import { Link } from "react-router-dom";

const LINKS = [
    "About",
    "Download",
    "Tutorials",
    "Community"
]

export default function Navbar( { tabOpen }) {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="left">
                <Link className="nav-link" to="/">AOTTG Wiki</Link>
            </div>
            <div className="right">
                {
                    LINKS.map((e) => (
                        // Set the route that created this navbar such that its link is highlighted.
                        <div key={e} className={"link-element " + ((e === tabOpen) && "active")}>
                            <Link className="nav-link" to={"/" + e}>{e}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
