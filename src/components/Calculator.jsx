import { useState } from 'react';
import "./Calculator.css";

export default function () {
    const [newVal, setNewVal] = useState("");
    const insertValue = (e) => {
        setNewVal(newVal.concat(e.target.value));
    };
    // const result = (res) => {
    //     switch (res){
    //         case "+":

    //     }
          
    // }
    return (
        <div className="encompassor">
            <div className="calc-scheme">
                <input className='grid-1' onChange={insertValue} value={newVal}></input>
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
                </div>
        </div>
    )
}