import React, {useState} from 'react'
import Display from './components/Display'
import Button from './components/Button'
import {evaluate} from 'mathjs'
import './App.css'


const App = () => {
 
  const btnColor = '#f2a33c';
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const addInput = (val) => {
    setInput((input) => [...input, val]);
  };

  const reset = () => {
    setInput('')
    setResult('')
  }

  const calculate = () => {
    const value = input.join('');
    setResult(evaluate(value))
  }


  return (
      <div className = 'container'>
        <div className = 'calculator-wrapper'>
          <Display input = {input} result = {result}/>
          <Button value = {'Clear All'} color ={'#333'} handleClick = {reset}/>
          <div className = 'row'>
            <Button value = {7} handleClick = {addInput} />
            <Button value = {8} handleClick = {addInput}/>
            <Button value = {9} handleClick = {addInput}/>
            <Button value = {'/'} color = {btnColor} handleClick = {addInput}/>
          </div>
          <div className = 'row'>
            <Button value = {4} handleClick = {addInput}/>
            <Button value = {5} handleClick = {addInput}/>
            <Button value = {6} handleClick = {addInput}/>
            <Button value = {'*'} color = {btnColor} handleClick = {addInput}/>
          </div>
          <div className = 'row'>
            <Button value = {1} handleClick = {addInput}/>
            <Button value = {2} handleClick = {addInput}/>
            <Button value = {3} handleClick = {addInput}/>
            <Button value = {'-'} color = {btnColor} handleClick = {addInput}/>
          </div>
          <div className = 'row'>
            <Button value = {0} handleClick = {addInput}/>
            <Button value = {'.'} handleClick = {addInput}/>
            <Button value = {'='} handleClick = {calculate}/>
            <Button value = {'+'} color = {btnColor} handleClick = {addInput}/>
          </div>
        </div>
      </div>
  )
}

export default App;