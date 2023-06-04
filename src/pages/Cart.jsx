import React, { useState } from "react";
import TotalPrice from "../components/TotalPrice";
function Cart() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <>
      <div className="main-container">
        <div className="cart-container">
          <div className="cart-left">
            <img
              src="https://www.shutterstock.com/image-photo/red-leather-armchair-isolated-on-260nw-1028424553.jpg"
              alt=""
            />
          </div>

          <div className="cart-right">
            <p>FURNITURE</p>
            <p>&#8377; 5000</p>
            <div className="qty">
              <button onClick={() => handleCount()}>-</button>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button className="remove">Remove</button>
          </div>
        </div>
        <TotalPrice />
      </div>
    </>
  );
}

export default Cart;
