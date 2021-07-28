import axios from 'axios';
import {currentValueApi, updateValueApi, maxValueApi} from '../apiConstants';
import {
  SET_COUNTER_VALUE,
  SET_LOADER_TRUE,
  GET_MAX_VALUE
} from '../actionConstants';

const setLoaderTrue = () => ({
  type: SET_LOADER_TRUE
});

export const increment = (dispatch, value, maxValue) => {
  return async () => {
    dispatch(setLoaderTrue());
    try {
      let res = await axios.put(updateValueApi, {
        counterValue: (value += 1),
        maxValue
      });
      const {counterValue} = res.data;
      dispatch({
        type: SET_COUNTER_VALUE,
        payload: counterValue
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const decrement = (dispatch, value, maxValue) => {
  return async () => {
    dispatch(setLoaderTrue());
    try {
      let res = await axios.put(updateValueApi, {
        counterValue: (value -= 1),
        maxValue
      });
      const {counterValue} = res.data;
      dispatch({
        type: SET_COUNTER_VALUE,
        payload: counterValue
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getInitialData = dispatch => {
  return async () => {
    dispatch(setLoaderTrue());
    try {
      let res = await axios.get(currentValueApi);
      if (res.data != null) {
        dispatch({
          type: SET_COUNTER_VALUE,
          payload: res.data
        });
      } else {
        alert('counter not initialized, setting to 1');
        dispatch({
          type: SET_COUNTER_VALUE,
          payload: 1
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMaxValue = dispatch => {
  return async () => {
    dispatch(setLoaderTrue());
    try {
      let res = await axios.get(maxValueApi);
      dispatch({
        type: GET_MAX_VALUE,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const typeCounterValue = (dispatch, value) => {
  return async () => {
    dispatch(setLoaderTrue());
    try {
      let res = await axios.put(updateValueApi, {
        counterValue: value
      });
      dispatch({
        type: SET_COUNTER_VALUE,
        payload: res.data != null ? res.data.counterValue : 0
      });
    } catch (err) {
      console.log(err);
    }
  };
};
