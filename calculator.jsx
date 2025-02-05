import React from "react";

export default function Calculator() {
  return (
    <>
      <h1>Calculator</h1>

      <div className="calculator">
        <div className="display"></div>

        <div className="buttons">
          <button>7</button>

          <button>8</button>

          <button>9</button>

          <button className="symbol">/</button>

          <button>4</button>

          <button>5</button>

          <button>6</button>

          <button className="symbol">*</button>

          <button>1</button>

          <button>2</button>

          <button>3</button>

          <button className="symbol">-</button>

          <button>0</button>

          <button>.</button>

          <button>C</button>

          <button>+</button>

          <button>=</button>
        </div>
      </div>
    </>
  );
}
