import * as Types from '../../types/Types';

const initialState = {
  counter: 0,
};

function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_COUNTER:
      return {
        ...state,
      };

    case Types.INC:
      let updatedIncrementValue =
        typeof action.payload === 'undefined' ? 1 : action.payload;
      updatedIncrementValue = parseInt(updatedIncrementValue);

      return {
        ...state,
        counter: state.counter + updatedIncrementValue,
      };

    case Types.DEC:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case Types.UPDATE:
      return {
        ...state,
        counter: parseInt(action.payload),
      };

    default:
      break;
  }
  return state;
}

export default CounterReducer;
