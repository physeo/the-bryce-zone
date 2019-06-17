import React from "react"
import Header from "./header"
import "./layout.css"
// import Nav from "./Nav"
import SideNav from "./navigation/SideNav"

const Layout = ({ children }) => (
  <div>
    <SideNav />
    <div className="main">
      <Header siteTitle="The Bryce Zone" />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main style={{ marginBottom: "26px" }}>{children}</main>
        <footer
          style={{
            width: "100%",
            bottom: 0,
            position: "relative",
            height: "2em",
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  </div>
)

export default Layout
