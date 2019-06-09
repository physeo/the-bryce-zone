import React from "react"
import Layout from "../components/Layout"
import "./toolbox.css"

const Toolbox = () => (
  <Layout>
    <h1>My Development Toolbox</h1>
    <div className="toolbox-flex-container">
      <div className="toolbox-flex-item">C#</div>
      <div className="toolbox-flex-item">MySQL</div>
      <div className="toolbox-flex-item">PostgreSQL</div>
      <div className="toolbox-flex-item">MSSQL</div>
      <div className="toolbox-flex-item">React</div>
      <div className="toolbox-flex-item">JavaScript</div>
      <div className="toolbox-flex-item">HTML</div>
      <div className="toolbox-flex-item">CSS</div>
    </div>
  </Layout>
)

export default Toolbox
