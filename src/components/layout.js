import React from "react"
import Header from "./Header"
import "./layout.css"
// import Nav from "./Nav"
import SideNav from "./navigation/SideNav"

const Layout = ({ children }) => (
  <div>
    <SideNav />
    <div style={{ marginLeft: "151px" }}>
      <Header siteTitle="The Bryce Zone" />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            width: "100%",
            bottom: 0,
            position: "fixed",
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
