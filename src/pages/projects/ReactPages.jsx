import React, { useState } from 'react';

const ReactPages = () => {
  const [show, setShow] = useState(1);

  const handleClick = (e) => {
    if (e.target.id === 2) {
      setShow(2);
    }
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
          src="https://user-images.githubusercontent.com/27709832/157883026-89e3ecca-f26d-46c6-9917-2dc1dc072316.png"
          alt="Covid19 Stats"
        />
        <img
          className="list-image"
          src="https://user-images.githubusercontent.com/27709832/158596891-26a5f175-b4e1-4963-82c5-9e12f4da263c.png"
          alt="Books store"
        />
        <img
          className="list-image"
          src="https://user-images.githubusercontent.com/27709832/157883026-89e3ecca-f26d-46c6-9917-2dc1dc072316.png"
          alt="Covid19 Stats"
        />
        <img
          className="list-image"
          src="https://user-images.githubusercontent.com/27709832/158596891-26a5f175-b4e1-4963-82c5-9e12f4da263c.png"
          alt="Books store"
        />
      </div>
      <div className="images">
        {show === 1 ? (
          <img
            className="show-image hidden"
            id="image1"
            src="https://user-images.githubusercontent.com/27709832/157883026-89e3ecca-f26d-46c6-9917-2dc1dc072316.png"
            alt="Covid19 Stats"
          />
        ) : (
          ''
        )}
        {show === 2 ? (
          <img
            className="show-image hidden"
            id="image2"
            src="https://user-images.githubusercontent.com/27709832/158596891-26a5f175-b4e1-4963-82c5-9e12f4da263c.png"
            alt="Books store"
          />
        ) : (
          ''
        )}
      </div>
      <div className="description">
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
          <a href="https://brytebee.github.io/Bookstore-React/" target="_blank">
            Live link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReactPages;
