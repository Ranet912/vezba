import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import '../../styles/containers/FetchApi/FetchApi.css'

const FetchApi = () => {

const [books, setBooks] = useState(null)
const apiURL = 'https://anapioficeandfire.com/api/books/'

function fetchBooks() {
  fetch(apiURL)
    .then(resp => resp.json())
    .then(data => {
      setBooks(data)
      console.log(data)
    })
}
  return(
    <div>
      <NavigationBar />

      <div className="fetchTitle">
        <h1>Game of thrones books</h1>
      </div>

      <div className="fetchHeader">
        <h2>Fetch a book from an API and display it</h2>
      </div>

      <div className="fetchButton">
        <button className="" onClick={fetchBooks}>Fetch</button>
      </div>

      <div className="booksBox">
      {books && books.map((book, index) => (
        <div className="book" key={index}>
          Book {index + 1}
          <div className="details">
            name: {book.name}
            author: {book.authors}
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default FetchApi
