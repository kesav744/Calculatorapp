import { useState } from "react";
import './App.css';
const App = () => {
    const [result,setResult] = useState('');
    const whenClicking = (event) => {
        setResult(result.concat(event.target.name));
    };
    const clear = () => {
setResult('');
    };
    const backspace = () => {
setResult(result.slice(0,result.length-1));
    };
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        }
        catch(err) {
            setResult('ERROR');
        }
    };
    return <>
        <div className="container">
            <form>
                <input type='text' value={result} />
            </form>
        
        <div className="keypad">
            <button onClick={clear} id='clear'>clear</button>
            <button onClick={backspace} id='backspace'>C</button>
            <button name='/' onClick={whenClicking}>&divide;</button>
            <button name='7' onClick={whenClicking}>7</button>
            <button name='8' onClick={whenClicking}>8</button>
            <button name='9' onClick={whenClicking}>9</button>
            <button name='*' onClick={whenClicking}>&times;</button>
            <button name='4' onClick={whenClicking}>4</button>
            <button name='5' onClick={whenClicking}>5</button>
            <button name='6' onClick={whenClicking}>6</button>
            <button name='-' onClick={whenClicking}>&ndash;</button>
            <button name='1' onClick={whenClicking}>1</button>
            <button name='2' onClick={whenClicking}>2</button>
            <button name='3' onClick={whenClicking}>3</button>
            <button name='+' onClick={whenClicking}>+</button>
            <button name='0' onClick={whenClicking}>0</button>
            <button name='.' onClick={whenClicking}>.</button>
            <button onClick={calculate} id='equal'>=</button>
        </div>
        </div>
    </>
};

export default App;

////////////////////