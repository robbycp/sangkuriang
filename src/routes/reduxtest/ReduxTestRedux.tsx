import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from 'redux/reducer/counterSlice';

import ReduxTestView from './ReduxTestView'

function ReduxTestRedux() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = React.useState('2');

  const props = {
    count,
    dispatchDecrement: () => dispatch(decrement()),
    dispatchIncrement: () => dispatch(increment()),
    dispatchIncrementAsync: () => dispatch(incrementAsync(Number(incrementAmount) || 0)),
    dispatchIncrementByAmount: () => dispatch(incrementByAmount(Number(incrementAmount) || 0)),
    incrementAmount,
    setIncrementAmount,
  }

  return (
    <ReduxTestView {...props} />
  )
}

export default ReduxTestRedux
