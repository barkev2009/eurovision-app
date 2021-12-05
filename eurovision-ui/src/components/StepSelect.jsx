import React from 'react'
import './styles/YearSelect.css'

const StepSelect = ({steps, onChange, defaultValue}) => {

    return (
        <div className='select'>
            <select onChange={e => onChange(e.target.value)}>
                <option disabled>{defaultValue}</option>
                {steps.map(step => 
                <option key={step.name}>{step.name}</option>
                )}
            </select>
        </div>
    )
}

export default StepSelect
