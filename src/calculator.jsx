import React from "react";
import { useState } from "react";

export default function Calculator() {
  const [displayvalue, setdisplayvalue] = useState("");

  const handlebuttonclick = (value) => {
    if (value === "C") {
      cleardisplay();
    } else {
      setdisplayvalue((prev) => prev + value);
    }
}

const cleardisplay = () => {
  setdisplayvalue("");
};


  return (
    <>
    <h1>Calculator</h1>
    <div className="calculator">
      <div className="display">{displayvalue}</div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "C", "+"].map((btn) => (
          <button onClick={() => handlebuttonclick(btn)} className={["/", "*", "-", "+", "="].includes(btn) ? "symbol" : ""}>
            {btn}
          </button>
        ))}
        <button className="equals">=</button>
      </div>
    </div>
  </>
);
};
