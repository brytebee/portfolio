import React from 'react';
import MyLinearProgress from '../components/Progress';
import generateColor from '../data/generateColor';

// const techs = [
//   {
//     name: 'Programming languages',
//     JavaScript: 80,
//     Ruby: 70,
//     HTML5: 95,
//     CSS: 65,
//     SQL: 85,
//     Haml: 60,
//   },
//   {
//     name: 'Frameworks',
//     ReactJS: 80,
//     'Ruby on Rails': 70,
//     Bootstrap: 95,
//   },
//   {
//     name: 'Technologies',
//     MySQL: 50,
//     Netlify: 90,
//     Heroku: 98,
//     GitHub: 80,
//     Jest: 80,
//   },
// ];

const Skills = () => (
  <div className="gen-padding">
    <div>
      <h2 style={{ color: generateColor }}>Programming languages</h2>
      <div className="d-flex">
        <p>
          JavaScript: <MyLinearProgress value={80} />
        </p>
        <p>
          Ruby: <MyLinearProgress value={70} />
        </p>
        <p>
          HTML5: <MyLinearProgress value={95} />
        </p>
        <p>
          CSS: <MyLinearProgress value={65} />
        </p>
        <p>
          SQL: <MyLinearProgress value={85} />
        </p>
        <p>
          Haml: <MyLinearProgress value={60} />
        </p>
      </div>
    </div>
    <div>
      <h2>Frameworks</h2>
      <div className="d-flex">
        <p>
          ReactJS: <MyLinearProgress value={80} />
        </p>
        <p>
          Ruby on Rails: <MyLinearProgress value={70} />
        </p>
        <p>
          Bootstrap: <MyLinearProgress value={95} />
        </p>
      </div>
    </div>
    <div>
      <h2>Technologies</h2>
      <div className="d-flex">
        <p>
          MySQL: <MyLinearProgress value={50} />
        </p>
        <p>
          Netlify: <MyLinearProgress value={90} />
        </p>
        <p>
          Heroku: <MyLinearProgress value={98} />
        </p>
        <p>
          GitHub: <MyLinearProgress value={80} />
        </p>
        <p>
          Jest: <MyLinearProgress value={80} />
        </p>
      </div>
    </div>
  </div>
);

export default Skills;
