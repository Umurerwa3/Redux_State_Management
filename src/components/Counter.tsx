import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/actions/counterActions'
import type { AppDispatch, RootState } from '../store/store'

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <section className="counter-panel" aria-labelledby="counter-title">
      <div className="counter-heading">
        <span className="counter-label">Current value</span>
        <strong id="counter-title">{count}</strong>
      </div>
      <div className="counter-actions">
        <button
          type="button"
          onClick={() => dispatch(decrement())}
          aria-label="Decrement counter"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => dispatch(increment())}
          aria-label="Increment counter"
        >
          +
        </button>
        <button className="reset-button" type="button" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </section>
  )
}

export default Counter