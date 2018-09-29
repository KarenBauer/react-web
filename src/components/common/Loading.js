import React from 'react';
import Loader from 'react-loaders';

const Loading = () => (
  <div className="loading-background">
    <div className="loading-wrapper">
      <Loader type="ball-beat" active color="#911e1e" />
    </div>
  </div>
);

export default Loading;
