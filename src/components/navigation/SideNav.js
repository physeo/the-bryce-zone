import React from "react"
import { Link } from "gatsby"
import "./SideNav.css"

const Nav = () => (
  <div className="sidebar">
    <Link to="/">Home</Link>
    <Link to="/Toolbox/">Toolbox</Link>
    <Link to="/Education/">Education</Link>
    <Link to="/Photography/">Photography</Link>
    <Link to="/FavoriteBooks/">Favorite Books</Link>
  </div>
  // <nav>
  //   <ul>
  //     <li>
  //       <Link to="/">Home</Link>
  //     </li>
  //     <li>
  //       <Link to="/Toolbox/">Toolbox</Link>
  //     </li>
  //     <li>
  //       <Link to="/Education/">Education</Link>
  //     </li>
  //     <li>
  //       <Link to="/Photography/">Photography</Link>
  //     </li>
  //     <li>
  //       <Link to="/FavoriteBooks/">Favorite Books</Link>
  //     </li>
  //   </ul>
  // </nav>
)

export default Nav
