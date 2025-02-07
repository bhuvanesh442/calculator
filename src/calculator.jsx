import React from "react";
import { useState } from "react";

export default function Calculator() {
  const [displayvalue, setdisplayvalue] = useState("");

  const handlebuttonclick = (value) => {
    if (value === "=") {
      calculateresult();
    } else if (value === "C") {
      setdisplayvalue("");
    } else {
      setdisplayvalue((prev) => prev + value);
    }
  };

  const calculateresult = () => {
    try {
      if (/[\+\-\*\/]{2,}/.test(displayvalue) || /^[\*\/]/.test(displayvalue)) {
        setdisplayvalue("Error");
        return;
      }

      const result = new Function(`return ${displayvalue}`)();

      setdisplayvalue(result.toString());
    } catch (error) {
      setdisplayvalue("Error");
    }
  };

  return (
    <>
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">{displayvalue}</div>
        <div className="buttons">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "C",
            "+",
          ].map((btn) => (
            <button
              key={btn}
              onClick={() => handlebuttonclick(btn)}
              className={["/", "*", "-", "+"].includes(btn) ? "symbol" : ""}
            >
              {btn}
            </button>
          ))}
          <button onClick={() => handlebuttonclick("=")} className="equals">
            =
          </button>
        </div>
      </div>
    </>
  );
}