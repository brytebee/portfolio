import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const Progress = ({ progress }) => (
  <CircularProgress
    color="inherit"
    size={95}
    thickness={2}
    className="progressbar"
    variant="determinate"
    value={progress}
  />
);

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Progress;
