import React from 'react';
import './Loader.css';
const Loader = () => {
    return (
      <div className='loaderWrapper'>
        <div className='spin'></div>
        <div className='loader'>Saving Counter Value</div>
      </div>
    );
};

export default Loader;