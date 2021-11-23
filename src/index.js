// index.js is an entry point so we need to render our components with react dom
import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import books from './books';
import Book from './Book';

// stateless functional component
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
