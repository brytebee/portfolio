import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const Progress = ({ progress }) => (
  <CircularProgress
    size={95}
    thickness={2}
    className="progressbar"
    variant="determinate"
    value={progress}
  />
);

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Progress;
