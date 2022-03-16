import React from 'react';

const handleClick = (e) => {
  console.log('target', e.target.id);
};

const ReactPages = () => (
  <div className="gen-padding">
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
      <img
        className="show-image hidden"
        onClick={handleClick}
        id="image1"
        src="https://user-images.githubusercontent.com/27709832/157883026-89e3ecca-f26d-46c6-9917-2dc1dc072316.png"
        alt="Covid19 Stats"
      />
      <img
        className="show-image hidden"
        onClick={handleClick}
        id="image2"
        src="https://user-images.githubusercontent.com/27709832/158596891-26a5f175-b4e1-4963-82c5-9e12f4da263c.png"
        alt="Books store"
      />
    </div>
  </div>
);

export default ReactPages;
