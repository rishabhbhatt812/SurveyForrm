import React from 'react';

const ProgressBar = ({ current, total }) => {
  return (
    <div className="progress-bar">
      <p>
        Question <span> {current}</span>/{total}
      </p>
    </div>
  );
};

export default ProgressBar;
