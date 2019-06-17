import React from "react"
import Layout from "../components/layout"
import Book from "../components/Book"
import "./favorite-books.css"
import MyBooks from "../components/BookInfo"

class FavoriteBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { SelectedBookQuote: "" }
  }

  render() {
    const { SelectedBookQuote } = this.state
    const bookComponents = MyBooks.map((b, index) => (
      <Book
        key={index}
        path={b.path}
        title={b.title}
        quote={b.quote}
        onHover={() => this.setState({ SelectedBookQuote: b.quote })}
        offHover={() => this.setState({ SelectedBookQuote: "" })}
      />
    ))
    return (
      <Layout>
        <div className="book-cover-flex-container">{bookComponents}</div>
        <div>{SelectedBookQuote === "" ? "" : SelectedBookQuote}</div>
      </Layout>
    )
  }
}

export default FavoriteBooks
