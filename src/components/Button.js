import React, {useContext} from 'react'
import './Button.css'
import { CalculatorContext } from './CalculatorContext'
import {evaluate} from 'mathjs'

const Button = ({value, color, handleClick}) => {
    const {input, setInput, setResult} = useContext(CalculatorContext)

    const addInput = (e) => {
        setInput((input) => [...input, e.target.innerText]);
      };
    
      const reset = () => {
        setInput('')
        setResult('')
      }
    
      const calculate = () => {
        const value = input.join('');
        setResult(evaluate(value).ToFixed(2))
        setInput('')
      }
    
    return (
        <div className = 'button-wrapper' >
            <button className = 'clear' onClick = {reset}>Clear All</button>
            <div className = 'row'>
                <button className = 'number' onClick = {addInput}>7</button>
                <button className = 'number' onClick = {addInput}>8</button>
                <button className = 'number' onClick = {addInput}>9</button>
                <button className = 'operator' onClick = {addInput}>/</button>
            </div>
            <div className = 'row'>
                <button className = 'number' onClick = {addInput}>4</button>
                <button className = 'number' onClick = {addInput}>5</button>
                <button className = 'number' onClick = {addInput}>6</button>
                <button className = 'operator' onClick = {addInput}>*</button>
            </div>
            <div className = 'row'>
                <button className = 'number' onClick = {addInput}>1</button>
                <button className = 'number' onClick = {addInput}>2</button>
                <button className = 'number' onClick = {addInput}>3</button>
                <button className = 'operator' onClick = {addInput}>+</button>
            </div>
            <div className = 'row'>
                <button className = 'number' onClick = {addInput}>0</button>
                <button className = 'number' onClick = {addInput}>.</button>
                <button className = 'number' onClick = {calculate}>=</button>
                <button className = 'operator' onClick = {addInput}>-</button>
            </div>
        </div>
    )
}

export default Button
