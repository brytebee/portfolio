import React, { useState } from 'react';

const ReactPages = () => {
  const [show, setShow] = useState(1);

  const handleClick = (e) => {
    console.log(e.target.id);
    setShow(Number(e.target.id));
  };

  return (
    <div className="gen-padding gallery">
      <div className="list">
        <img
          className="list-image"
          onClick={handleClick}
          id="1"
          src="https://user-images.githubusercontent.com/27709832/157883026-89e3ecca-f26d-46c6-9917-2dc1dc072316.png"
          alt="Covid19 Stats"
        />
        <img
          className="list-image"
          onClick={handleClick}
          id="2"
          src="https://user-images.githubusercontent.com/27709832/158596891-26a5f175-b4e1-4963-82c5-9e12f4da263c.png"
          alt="Books store"
        />
        <img
          className="list-image"
          onClick={handleClick}
          id="3"
          src="https://user-images.githubusercontent.com/27709832/154051255-6d06148d-d50a-447e-89e4-32eb3cf8b06c.png"
          alt="Modern Todo List"
        />
        <img
          className="list-image"
          onClick={handleClick}
          id="2"
          src="https://user-images.githubusercontent.com/27709832/158596891-26a5f175-b4e1-4963-82c5-9e12f4da263c.png"
          alt="Books store"
        />
      </div>
      <div className="images">
        {show === 1 && (
          <img
            className="show-image"
            id="image1"
            src="https://user-images.githubusercontent.com/27709832/157883026-89e3ecca-f26d-46c6-9917-2dc1dc072316.png"
            alt="Covid19 Stats"
          />
        )}
        {show === 2 && (
          <img
            className="show-image"
            id="image2"
            src="https://user-images.githubusercontent.com/27709832/158596891-26a5f175-b4e1-4963-82c5-9e12f4da263c.png"
            alt="Books store"
          />
        )}
        {show === 3 && (
          <img
            className="show-image"
            id="image3"
            src="https://user-images.githubusercontent.com/27709832/154051255-6d06148d-d50a-447e-89e4-32eb3cf8b06c.png"
            alt="Books store"
          />
        )}
      </div>
      <div className="description">
        {show === 1 && (
          <div id="discription1" className="desc">
            <h3>React | COVID19 STATS</h3>
            <p>
              A covid19 stats app build with ReactJS at Microverse. Built with
              React, Redux and API. I wrote tests using Jest and React Testing
              Library.
            </p>
            <ul>
              <li>ReactJS - Function based component</li>
              <li>Redux</li>
              <li>API</li>
            </ul>
            <a
              href="http://capstone-react-brytebee.herokuapp.com/"
              target="_blank"
            >
              Covid19 Live link
            </a>
          </div>
        )}
        {show === 2 && (
          <div id="discription2" className="desc">
            <h3>Bookstore-React</h3>
            <p>
              This project is used to display a list of books. Users can
              add/remove books from the list. It is built with ReactJS and
              Redux. It implements Routing, and Components concepts
            </p>
            <ul>
              <li>ReactJS - Function based component</li>
              <li>Redux</li>
              <li>API</li>
            </ul>
            <a
              href="https://brytebee.github.io/Bookstore-React/"
              target="_blank"
            >
              Bookstore Live link
            </a>
          </div>
        )}
        {show === 3 && (
          <div id="discription2" className="desc">
            <h3>React TodoList App</h3>
            <p>
              A simple todo list. The application is built with ReactJS and
              local storage.
            </p>
            <ul>
              <li>ReactJS</li>
              <li>DOM</li>
              <li>Local storage</li>
            </ul>
            <a href="https://brytebee.github.io/react-todo/" target="_blank">
              Modern Todo List Live link
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactPages;
