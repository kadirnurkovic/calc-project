import { useState } from "react";
import "./Calculator.css";

export default function () {
  const [newVal, setNewVal] = useState("");
  const [result, setResult] = useState("");
  const insertValue = (e) => {
    setNewVal(newVal.concat(e.target.value));
  };

  // This function implicitly generates a evaluation of the input that was given to it
  // The reason is that "eval()" is not recommened

  const evaluate = () => {
    return setNewVal(new Function("return " + newVal)( console.log(newVal) ).toString());
  };
  const clearAll = () => {
    setNewVal("");
  };
  const clearDigit = () => {
    setNewVal(newVal.slice(0, newVal.length - 1));
  };
  return (
    <div className="encompassor">
      <div className="calc-scheme">
        <input
          className="grid-1"
          onChange={insertValue}
          value={newVal}
          readOnly="readonly"
        ></input>
        <button className="calc-buttons" onClick={insertValue} value="1">
          1
        </button>
        <button className="calc-buttons" onClick={insertValue} value="2">
          2
        </button>
        <button className="calc-buttons" onClick={insertValue} value="3">
          3
        </button>
        <button className="calc-buttons" onClick={insertValue} value="+">
          +
        </button>
        <button className="calc-buttons" onClick={insertValue} value="4">
          4
        </button>
        <button className="calc-buttons" onClick={insertValue} value="5">
          5
        </button>
        <button className="calc-buttons" onClick={insertValue} value="6">
          6
        </button>
        <button className="calc-buttons" onClick={insertValue} value="-">
          -
        </button>
        <button className="calc-buttons" onClick={insertValue} value="7">
          7
        </button>
        <button className="calc-buttons" onClick={insertValue} value="8">
          8
        </button>
        <button className="calc-buttons" onClick={insertValue} value="9">
          9
        </button>
        <button className="calc-buttons" onClick={insertValue} value="/">
          /
        </button>
        <button className="calc-buttons" onClick={insertValue} value="*">
          *
        </button>
        <button className="calc-buttons" onClick={insertValue} value=".">
          .
        </button>
        <button className="calc-buttons" onClick={clearAll}>
          AC
        </button>
        <button className="calc-buttons" onClick={clearDigit}>
          C
        </button>
        <button className="calc-buttons" onClick={evaluate}>
          =
        </button>
      </div>
    </div>
  );
}
