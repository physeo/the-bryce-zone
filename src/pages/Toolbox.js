import React from "react"
import Layout from "../components/layout"
import "./toolbox.css"

const Toolbox = () => (
  <Layout>
    <h4>
      "It is a mistake to think you can solve any major problems just with
      potatoes." - Douglas Adams
    </h4>
    <div className="toolbox-flex-container">
      <div className="toolbox-flex-item">C#</div>
      <div className="toolbox-flex-item">MySQL</div>
      <div className="toolbox-flex-item">PostgreSQL</div>
      <div className="toolbox-flex-item">MSSQL</div>
      <div className="toolbox-flex-item">Elastic Search</div>
      <div className="toolbox-flex-item">React</div>
      <div className="toolbox-flex-item">JavaScript</div>
      <div className="toolbox-flex-item">HTML</div>
      <div className="toolbox-flex-item">CSS</div>
      <div className="toolbox-flex-item">AWS (Amazon Web Services)</div>
      <div className="toolbox-flex-item">Windows Powershell</div>
    </div>
  </Layout>
)

export default Toolbox
