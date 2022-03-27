import React, {useState} from 'react';
import './App.css';
import CalculatorService from './calculator.service'

function App() {

  const [calculate, concatenateNumber, Sum, Sub, Multiply, Divide] = CalculatorService();

  const [txtNumber, setTxtNumber] = useState('0');
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState(null);
  const [operation, setOperation] = useState(null);

  function addNumber(number){
    let Result;

    if (operation === null) {
      Result = concatenateNumber(number1, number);
      setNumber1(Result);
    } else {
      Result = concatenateNumber(number2, number);
      setNumber2(Result); 
    }
    setTxtNumber(Result);
  }

  function defineOperation(op) {
    //just define operation if it does not exist
    if (operation === null) {
      setOperation(op);
      return;
    }
    //if operation is defined and number 2 selected, will calculate the operation
    if (number2 !== null) {
       const result = calculate(parseFloat(number1),  parseFloat(number2), operation);
       setOperation(op);
       setNumber1(result.toString());
       setNumber2(null);
       setTxtNumber(result.toString());
    }
  }

  function calculateAction() {
    if (number2 === null) {
      return;
    }
    const result = calculate(parseFloat(number1), parseFloat(number2), operation);
    setTxtNumber(result);
  }

  function clear() {
    setTxtNumber('0');
    setNumber1('0');
    setNumber2(null);
    operation(null);
  }

  return (
        <div className="calculator">
          <div className="result">
            <div className="result-number" >
              {txtNumber}
            </div>
          </div>
          <div className="buttons">

            <div className="row1">
              <button onClick={clear}>C</button>
              <button onClick={() => defineOperation(Divide) }>/</button>
            </div>

            <div className="row2">
              <button onClick={() => addNumber('7') }>7</button>
              <button onClick={() => addNumber('8') }>8</button>
              <button onClick={() => addNumber('9') }>9</button>
              <button onClick={() => defineOperation(Multiply) }>*</button>
              <button onClick={() => addNumber('4') }>4</button>
              <button onClick={() => addNumber('5') }>5</button>
              <button onClick={() => addNumber('6') }>6</button>
              <button onClick={() => defineOperation(Sub) }>-</button>
              <button onClick={() => addNumber('1') }>1</button>
              <button onClick={() => addNumber('2') }>2</button>
              <button onClick={() => addNumber('3') }>3</button>
              <button onClick={() => defineOperation(Sum) }>+</button>
            </div>

            <div className="row3">
            <button onClick={() => addNumber('0') }>0</button>
            <button onClick={() => addNumber('.') }>.</button>
            <button onClick={calculateAction}>=</button>
            </div>

          </div>
        </div>
  );
}

export default App;
