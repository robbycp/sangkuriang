import React from 'react'

import styles from 'components/Counter.module.css';

interface PageHomeViewProps {
  count: Number,
  dispatchDecrement: React.MouseEventHandler<HTMLButtonElement>,
  dispatchIncrement: React.MouseEventHandler<HTMLButtonElement>,
  dispatchIncrementAsync: React.MouseEventHandler<HTMLButtonElement>;
  dispatchIncrementByAmount: React.MouseEventHandler<HTMLButtonElement>;
  incrementAmount: string,
  setIncrementAmount: (p: string) => any,
}

const PageHomeView: React.FC<PageHomeViewProps> = ({
  count,
  dispatchDecrement,
  dispatchIncrement,
  dispatchIncrementAsync,
  dispatchIncrementByAmount,
  incrementAmount,
  setIncrementAmount,
}) => {
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={dispatchIncrement}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={dispatchDecrement}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={dispatchIncrementByAmount}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={dispatchIncrementAsync}
        >
          Add Async
        </button>
      </div>
    </div>
  )
}

export default PageHomeView
