import React, {useState, createContext} from 'react'

export const CalculatorContext = createContext();

const CalculatorProvider = (props) => {

    const [result, setResult] = useState('Hello');
    const [input, setInput] = useState('Hi');


    const providerValues = {
        result,
        setResult,
        input, 
        setInput,
    }

    

    return(
        <div>
            <CalculatorContext.Provider value = {providerValues}>
                {props.children}
            </CalculatorContext.Provider>
        </div>
    )
}

export default CalculatorProvider