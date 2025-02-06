import React from "react";

export default function Calculator() {
  return (
    <>
    <h1>Calculator</h1>
    <div className="calculator">
      <div className="display"></div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "C", "+"].map((btn) => (
          <button  >
            {btn}
          </button>
        ))}
        <button>=</button>
      </div>
    </div>
  </>
);
};
