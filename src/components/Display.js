import React, {useContext} from 'react'
import { CalculatorContext } from './CalculatorContext'
import './Display.css'

const Display = () => {
   
    const {input, result} = useContext(CalculatorContext)
    
    return (
        <div className = 'display-wrapper'>
            <div className = 'result'>
                <h1>{result}</h1>
            </div>
            <div className = 'input'>
                <h3>{input}</h3>
            </div>
        </div>
    )
}

export default Display
