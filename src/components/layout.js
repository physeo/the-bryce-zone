import React from "react"
import Header from "./header"
import "./layout.css"
// import MySideNav from "./MySideNav"

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css"

const Layout = ({ children }) => (
  <div>
    {/* <MySideNav /> */}
    <Header siteTitle="The Bryce Zone" />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </div>
)

export default Layout
