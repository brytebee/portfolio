import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => (
  <div className="gen-padding">
    <div className="projects">
      <div className="top">
        <Link className="card" to="/projects/react">
          React
        </Link>
        <Link className="card" to="/projects/rails">
          Rails
        </Link>
      </div>
      <div className="bottom">
        <Link className="card" to="/projects/js">
          JavaScript
        </Link>
        <Link className="card" to="/projects/landing">
          Landing pages
        </Link>
      </div>
    </div>
  </div>
);

export default Projects;
