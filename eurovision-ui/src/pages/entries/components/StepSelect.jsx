import React from 'react'
import '../../../styles/style.css'

const StepSelect = ({steps, onChange, defaultValue, curValue}) => {

    return (
        <div className='select'>
            <select onChange={e => onChange(e.target.value)} value={curValue}>
                <option disabled>{defaultValue}</option>
                {steps.map(step => 
                <option key={step}>{step}</option>
                )}
            </select>
        </div>
    )
}

export default StepSelect
