// index.js is an entry point so we need to render our components with react dom
import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// setup vars
const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_ML2_.jpg',
  title: 'I Love You to the Moon and Backssss',
  author: 'Amelia Hepworth',
};

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen ',
};

// stateless functional component
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
