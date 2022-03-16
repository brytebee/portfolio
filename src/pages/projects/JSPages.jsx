import React, { useState } from 'react';

const JSPages = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="gen-padding">
      <button onClick={() => setShow((prev) => !prev)}>Click</button>
      {show && <p>This is your component</p>}
    </div>
  );
};

export default JSPages;
