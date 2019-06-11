import React from "react"

class FavoriteBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hovered: false }
  }

  // onMouseEnter = () => this.setState({ hovered: true })
  onMouseEnter = () => this.props.onHover()

  onMouseLeave = () => this.props.offHover()

  render() {
    const { path, title, quote } = this.props

    return (
      <div>
        <div
          className="book-cover-flex-item"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <img src={path} alt={title}></img>
        </div>
        {/* {this.state.hovered ? <p>{quote}</p> : ""} */}
      </div>
    )
  }
}

export default FavoriteBooks
