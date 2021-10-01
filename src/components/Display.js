import React from 'react'

import './Display.css'

const Display = ({result, input}) => {
   
    
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
