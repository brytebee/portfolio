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
    </div>
  );
};

export default ReactPages;
