import React from "react"
import { Link } from "gatsby"
import "./SideNav.css"

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Toolbox/">Toolbox</Link>
      </li>
      <li>
        <Link to="/Photography/">Photography</Link>
      </li>
      <li>
        <Link to="/FavoriteBooks/">Favorite Books</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
