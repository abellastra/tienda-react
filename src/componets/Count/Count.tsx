import { useState } from "react";

type prors={
    
}

export const Count = ({ btnText, onConfirm }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const confirm = () => {
    if (count > 0) {
      onConfirm(count);
    } else {
      alert("seleccione una cantodad mayor a cero");
    }
  };

  return (
    <div>
      <div>
        <button onClick={decrement}>-</button>
        <samp>{count}</samp>
        <button onClick={increment}>+</button>
      </div>

      <button onClick={confirm} disabled={count === 0}>
        {btnText}{" "}
      </button>
    </div>
  );
};
