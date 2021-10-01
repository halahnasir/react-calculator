import React from 'react'
import Display from './components/Display'
import Button from './components/Button'
import CalculatorProvider from './components/CalculatorContext'
import './App.css'


const App = () => {
  return (
    <CalculatorProvider>
      <h1>Calculator</h1>
        <div className = 'container'>
          <div className = 'calculator-wrapper'>
            <Display/>
            <Button/>
          </div>
        </div>
      </CalculatorProvider>
  )
}

export default App;