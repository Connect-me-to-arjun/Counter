import {
  SET_COUNTER_VALUE,
  SET_LOADER_TRUE,
  GET_MAX_VALUE
} from '../actionConstants';
let initialState={
    counterValue:0,
    maxValue:null,
    loading:false,
}

const counterReducer=(state=initialState,action)=>{
switch(action.type){
case SET_COUNTER_VALUE :
     return {...state, counterValue: action.payload, loading: false};
case SET_LOADER_TRUE:
      return {...state,loading: true};
case GET_MAX_VALUE:{
    return {...state, maxValue:action.payload ,loading: false};
}
default:
    return {...state};
}
}

export default counterReducer;