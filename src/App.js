import React from 'react';
import {useSelector} from 'react-redux';
import Counter from './components/Counter/Counter';
import CounterDetails from './components/CounterDetails/CounterDetails';
import Loader from './components/Loader/Loader';
import './App.css';
const App = () => {
  const {
    counterReducer: {loading}
  } = useSelector(state => state);
  return (
    <div>
      <div className='appContainer'>
        <div className='counterWrapper'>
          {loading && <Loader />}
          <Counter />
          <CounterDetails />
        </div>
      </div>
      <div className='meta'>
        <div className='details'>
          <p>
            <b>Details : </b>
          </p>
          <ul className='listMeta'>
            <li>
              Enter the required value in the counter and press <b>Enter</b> to
              update.
            </li>
            <li>
              Counter starts from 0 'Zero' if (GET)
              'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/
              <b>counterValue</b>.json' returns null.
            </li>
            <li>
              Max value will fallback to 1000 if (GET) '
              https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/
              <b>maxValue</b>.json' return null.
            </li>
            <li>
              Initialize the counter and max value by sending a (PUT) request
              for
              'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json'
              <br />
              Sample body :
              <br />
              {`{
                "counterValue": 5,
                "maxValue": 10
                }`}
            </li>
            <li>The Api's will be updated upon every Increment/Decrement.</li>
          </ul>
        </div>
        <div className='validations'>
          <p>
            <b>Validations Established : </b>
          </p>
          <ul className='listMeta'>
            <li>Decrementing below 0 "zero"</li>
            <li>incrementing above Max Value</li>
            <li>Adding empty value directly in the counter</li>
            <li>Adding negative value directly in the counter</li>
            <li> Adding a value above Max Value directly in the counter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
