import React from 'react';
import Bottom from './Bottom';

const Top = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Top Component</h2>
      <Bottom />
    </div>
  );
};

export default Top;
