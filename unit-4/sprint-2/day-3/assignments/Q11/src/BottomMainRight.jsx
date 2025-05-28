import React from 'react';

const BottomMainRight = ({ userName }) => {
  return (
    <div>
      <h2>Welcome, {userName || 'Guest'}!</h2>
    </div>
  );
};

export default BottomMainRight;
