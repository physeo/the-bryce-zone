import React from "react"

class FavoriteBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false }
  }

  onClick = () => this.setState(prevState => ({ clicked: !prevState.clicked }))
  onMouseEnter = () => this.props.onHover()

  onMouseLeave = () => this.props.offHover()

  render() {
    const { path, title, quote } = this.props

    const popUpMessageStyle = {
      width: "100%",
      // height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",
      position: "absolute",
      // top: "0",
      // bottom: "0",
      left: "200px",
      // right: "0",
      margin: "-200px",
      padding: "1em",
      textAlign: "center",
    }

    return (
      <div>
        <div
          className="book-cover-flex-item"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
        >
          <img src={path} alt={title}></img>
        </div>
        {this.state.clicked ? (
          <div
            className="mobile-quote"
            style={popUpMessageStyle}
            onClick={this.onClick}
          >
            <p>{quote}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    )
  }
}

export default FavoriteBooks
