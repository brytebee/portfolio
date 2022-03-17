import React from 'react';
import BrightOnSuit from '../assets/suit-black20.JPG';

const About = () => (
  <section className="gen-padding">
    <section className="about d-flex">
      <article className="about-content">
        <h2>Hello there! 👋👋</h2>
        <p>
          I used to be a sales representative 😎😎 but that's a fancy term. In
          my country, Nigeria, it is called a sales boy. I worked in this
          position for about 3 years while waiting for a dream job.
        </p>
        <img
          style={{ width: '250px', height: '250px' }}
          src="https://media.giphy.com/media/a6h71JgwZKz6w/giphy.gif"
          alt="happy Mr. Bean"
        />
        <p>
          A dream job refers to a white/blue-collar job in my locality. And
          although I had heard and loved programming earlier, I never knew how
          to become one. 😭😭
        </p>
        <p>
          Then came Andela 4.0 in 2019. This was a programme by google, Andela
          and Pluralsight, a fourth in its series and an entry for me into the
          tech space.
        </p>
        <img
          src="https://media.giphy.com/media/DWUEBCadFCSc0/giphy.gif"
          width="250px"
          frameBorder="0"
          alt="Google gif"
        ></img>
        <img
          src="https://media.giphy.com/media/MBy8TLwJWiO6at4nF9/giphy.gif"
          width="100px"
          frameBorder="0"
          class="Pluralsight gif"
        ></img>
        <img
          src="https://media.giphy.com/media/MBy8TLwJWiO6at4nF9/giphy.gif"
          width="100px"
          frameBorder="0"
          class="Pluralsight gif"
        ></img>
        <p>via GIPHY</p>
        <p>
          During the pandemic, I quit my job and began a full-time journey with
          the help of family and mentors. I took courses from freeCodeCamp,
          Coursera, Udacity and Udemy and as well YouTube.
        </p>
        <p>
          Soon I learned about{' '}
          <a target="_blank" href="https://www.microverse.org/?grsf=rxykm0">
            Microverse
          </a>{' '}
          and the beautiful opportunity it offered programmers. I joined
          microverse in January 2021 and as the saying goes, the rest is
          history…
        </p>
        <p>
          Today, I have learned some of the best technologies in the industry. I
          build and learn at the same time. This is why you should consider me
          to be a part of your team or build your solution.
        </p>
        <p>Let's build better solutions and a better world.</p>

        <h3>Hobbies</h3>
        <p>
          When I am not writing computer codes, I am seeing movies, travelling,
          singing in my band or writing an article. Feel free to drop by my
          articles page to see if some of my posts might interest you.
        </p>
        <p>I also love to bake or ‘organise’ sumptuous meals.</p>
        <h3>Atsighi Bright</h3>
      </article>
      <section className="about-images">
        <img
          style={{ width: '400px', padding: '2rem 0 2rem 2rem' }}
          src="https://access1.imglarger.com/results/NAOYR73v_male_3_cartoon11.png"
          alt="Bright cartooned playing guitar"
        />
        <img
          style={{ width: '400px', padding: '2rem 0 2rem 2rem' }}
          src={BrightOnSuit}
          alt="Bright cartooned playing guitar"
        />
      </section>
    </section>
  </section>
);

export default About;
