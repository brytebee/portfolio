import React from 'react';
import Progress from '../components/Progress';

const techs = [
  {
    name: 'Programming languages',
    JavaScript: 80,
    Ruby: 70,
    HTML5: 95,
    CSS: 65,
    SQL: 85,
    Haml: 60,
  },
  {
    name: 'Frameworks',
    ReactJS: 80,
    'Ruby on Rails': 70,
    Bootstrap: 95,
  },
  {
    name: 'Technologies',
    MySQL: 50,
    Netlify: 90,
    Heroku: 98,
    GitHub: 80,
    Jest: 80,
  },
];

const Skills = () => (
  <div className="gen-padding">
    <div>
      <h2>Programming languages</h2>
      <p>
        JavaScript: <Progress progress={80} />
      </p>
      <p>
        Ruby: <Progress progress={70} />
      </p>
      <p>
        HTML5: <Progress progress={95} />
      </p>
      <p>
        CSS: <Progress progress={65} />
      </p>
      <p>
        SQL: <Progress progress={85} />
      </p>
      <p>
        Haml: <Progress progress={60} />
      </p>
    </div>
    <div>
      <h2>Frameworks</h2>
      <p>
        ReactJS: <Progress progress={80} />
      </p>
      <p>
        Ruby on Rails: <Progress progress={70} />
      </p>
      <p>
        Bootstrap: <Progress progress={95} />
      </p>
    </div>
  </div>
);

export default Skills;
