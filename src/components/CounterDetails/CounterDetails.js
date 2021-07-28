import React from 'react';
import { useSelector } from 'react-redux';
import './CounterDetails.css'
const CounterDetails = () => {
      const {
        counterReducer: {counterValue,maxValue}
      } = useSelector(state => state);
  return (
    <div className='counterDetails'>
      <div>Counter Value : {counterValue}</div>
      <div>Max Value : {maxValue!== null ? maxValue : 'Not set - fallback to 1000'}</div>
    </div>
  );
};

export default CounterDetails;
