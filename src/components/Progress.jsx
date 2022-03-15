import { CircularProgress } from '@material-ui/core';
import React from 'react';

const Progress = (progress) => (
  <CircularProgress
    color="inherit"
    size={95}
    thickness={2}
    className="progressbar"
    variant="determinate"
    value={progress}
  />
);

export default Progress;
