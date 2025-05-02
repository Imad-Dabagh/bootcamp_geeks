import React, { useState } from 'react';
import './App.css';

function App() {

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [operator, setOperator] = useState();
  const [result, setResult] = useState(null);

  const handleInput1 = (e) => {
    const value1 = e.target.value;
    setNum1(Number(value1));
  }

  const handleInput2 = (e) => {
    const value2 = e.target.value;
    setNum2(Number(value2));
  }

  const calculate = () => {
    let res;
    switch (operator) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        if (num2 === 0 ){
          alert("Can't divide by zero");
          return;
        } else {
          res = num1 / num2;
          break;
        }
    }
    setResult(res);
  }

  return (
    <div className="app-container">
      <h2>Calculator</h2>

      <div className="inputs">
        <input type="number" placeholder="First Number" id='num1' onChange={handleInput1}/>
        <input type="number" placeholder="Second Number" id='num2' onChange={handleInput2}/>
      </div>

      <div className="operators">
        <button onClick={() => setOperator("+")} >+</button>
        <button onClick={() => setOperator("-")}>-</button>
        <button onClick={() => setOperator("*")}>*</button>
        <button onClick={() => setOperator("/")}>/</button>
      </div>

      <button className="calc-btn" onClick={calculate}>Calculate</button>

      {result !== null && (
        <div className="result">Result: {result}</div>
      )}
    </div>
  );
}

export default App;
