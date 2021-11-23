// index.js is an entry point so we need to render our components with react dom
import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
function Greeting() {
  return (
    <React.Fragment>
      <div className="test">
        <h1>hello people</h1>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
          <img src="" alt="" />
        </ul>
      </div>
      <div></div>
    </React.Fragment>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   );
// };

ReactDom.render(<Greeting />, document.getElementById('root'));
