import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState();

  const inputValue = Number(amount) || 0;

  const resetAll = () => {
    setAmount("");
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>

      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(inputValue))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(decrementByAmount(inputValue))}>
          Remove Amount
        </button>
      </div>
      <div>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
