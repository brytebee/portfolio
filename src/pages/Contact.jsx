import React from 'react';

const Contact = () => (
  <div className="gen-padding">
    <h2>Contact Me📧</h2>
    <form action="" method="post">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email Address" required />
      <textarea
        id="message"
        cols="30"
        rows="10"
        placeholder="Message"
        required
      />
      <button type="submit" id="submit">
        Send
      </button>
    </form>
  </div>
);

export default Contact;
