import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  getInitialData,
  typeCounterValue,
  getMaxValue
} from '../../redux/actions/counterActions';
import './Counter.css';
const Counter = () => {
  let [countData, setCountData] = useState('');
  const {
    counterReducer: {counterValue, maxValue}
  } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData(dispatch));
    dispatch(getMaxValue(dispatch));
  }, []);

  useEffect(() => {
    setCountData(counterValue);
  }, [counterValue]);

  const incrementCounter = () => {
    if (
      (maxValue !== null && parseInt(countData) === maxValue) ||
      parseInt(countData) === 1000
    ) {
      alert('max value reached');
    } else {
      dispatch(increment(dispatch, counterValue,maxValue));
    }
  };

  const decrementCounter = () => {
    if (countData !== 0) {
      dispatch(decrement(dispatch, counterValue,maxValue));
    } else {
      alert('Cannot decrement below Zero');
    }
  };

  const addCounterValue = e => {
    setCountData(e.target.value);
  };

  const updateCounterValueServer = e => {
    if (e.key === 'Enter') {
      if (countData.length < 1 || parseInt(countData) < 0) {
        alert(
          'Counter Data cannot be empty, or at least should start with zero'
        );
        setCountData(counterValue);
      } else if (
        (maxValue !== null && parseInt(countData) >= maxValue) ||
        parseInt(countData) >= 1000
      ) {
        alert(
          'You have entered Max value, please enter a value less than max value'
        );
      } else {
        if (
          window.confirm(
            `Are you sure, u want to set the counter value to ${countData} ?`
          )
        ) {
          dispatch(typeCounterValue(dispatch, parseInt(countData)));
        } else {
          setCountData(counterValue);
        }
      }
    }
  };

  return (
    <div className='counterContainer'>
      <div onClick={decrementCounter} className='decrementWrapper'>
        -
      </div>
      <input
        type='number'
        onChange={addCounterValue}
        className='counterValue'
        value={countData}
        onKeyDown={updateCounterValueServer}
      />
      <div onClick={incrementCounter} className='incrementWrapper'>
        +
      </div>
    </div>
  );
};

export default Counter;
