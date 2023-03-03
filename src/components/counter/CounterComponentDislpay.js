import { useSelector } from 'react-redux';

const CounterComponentDisplay = () => {
  const counter = useSelector((state) => state.CounterReducer.counter);
  return counter;
};

export default CounterComponentDisplay;
