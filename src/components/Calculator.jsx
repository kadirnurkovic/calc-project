import { useState } from 'react';
import "./Calculator.css";

export default function () {
    const [newVal, setNewVal] = useState("");
    const [result, setResult] = useState("");
    const insertValue = (e) => {
        setNewVal(newVal.concat(e.target.value));
    };
    const evaluate = () => {
        return setNewVal(new Function('return ' + newVal)());
    }
    const clearAll = () => {
        setNewVal("");
    }
    return (
        <div className="encompassor">
            <div className="calc-scheme">
                <input className='grid-1' onChange={insertValue} value={newVal} readOnly="readonly"></input>
                <button className="calc-buttons" onClick={insertValue} value="1">1</button>
                <button className="calc-buttons" onClick={insertValue} value="2">2</button>
                <button className="calc-buttons" onClick={insertValue} value="3">3</button>
                <button className="calc-buttons" onClick={insertValue} value="4">4</button>
                <button className="calc-buttons" onClick={insertValue} value="5">5</button>
                <button className="calc-buttons" onClick={insertValue} value="6">6</button>
                <button className="calc-buttons" onClick={insertValue} value="7">7</button>
                <button className="calc-buttons" onClick={insertValue} value="8">8</button>
                <button className="calc-buttons" onClick={insertValue} value="9">9</button>
                <button className="calc-buttons" onClick={insertValue} value="0">0</button>
                <button className="calc-buttons" onClick={insertValue} value="/">/</button>
                <button className="calc-buttons" onClick={insertValue} value="+">+</button>
                <button className="calc-buttons" onClick={insertValue} value="-">-</button>
                <button className="calc-buttons" onClick={insertValue} value="*">*</button>
                <button className="calc-buttons" onClick={insertValue} value="/">/</button>
                <button className="calc-buttons" onClick={clearAll}>AC</button>
                <button className="calc-buttons" onClick={evaluate}>=</button>       
                </div>
        </div>
    )
}