import React from 'react';
import Progress from '../components/Progress';
import generateColor from '../data/generateColor';

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
      <h2 style={{ color: generateColor }}>Programming languages</h2>
      <p>
        JavaScript: <Progress progress={80} style={{ color: generateColor }} />
      </p>
      <p>
        Ruby: <Progress progress={70} style={{ color: generateColor }} />
      </p>
      <p>
        HTML5: <Progress progress={95} style={{ color: generateColor }} />
      </p>
      <p>
        CSS: <Progress progress={65} style={{ color: generateColor }} />
      </p>
      <p>
        SQL: <Progress progress={85} style={{ color: generateColor }} />
      </p>
      <p>
        Haml: <Progress progress={60} style={{ color: generateColor }} />
      </p>
    </div>
    <div>
      <h2>Frameworks</h2>
      <p>
        ReactJS: <Progress progress={80} style={{ color: generateColor }} />
      </p>
      <p>
        Ruby on Rails:{' '}
        <Progress progress={70} style={{ color: generateColor }} />
      </p>
      <p>
        Bootstrap: <Progress progress={95} style={{ color: generateColor }} />
      </p>
    </div>
    <div>
      <h2>Technologies</h2>
      <p>
        MySQL: <Progress progress={50} style={{ color: generateColor }} />
      </p>
      <p>
        Netlify: <Progress progress={90} style={{ color: generateColor }} />
      </p>
      <p>
        Heroku: <Progress progress={98} style={{ color: generateColor }} />
      </p>
      <p>
        GitHub: <Progress progress={80} style={{ color: generateColor }} />
      </p>
      <p>
        Jest: <Progress progress={80} style={{ color: generateColor }} />
      </p>
    </div>
  </div>
);

export default Skills;
