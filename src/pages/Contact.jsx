import React from 'react';

const Contact = () => (
  <div className="gen-padding" style={{ textAlign: 'center' }}>
    <h2>Contact Me📧</h2>
    <form action="" method="post">
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          required
        />
        <button
          type="submit"
          id="submit"
          style={{
            margin: '8px 90px',
            backgroundColor: 'blueviolet',
            padding: '4px',
          }}
        >
          Send
        </button>
      </section>
    </form>
  </div>
);

export default Contact;
