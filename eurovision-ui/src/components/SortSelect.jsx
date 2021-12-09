import React from 'react'
import './styles/YearSelect.css'

const SortSelect = ({onChange, curValue, defaultValue}) => {
    return (
        <div className='select'>
            <select onChange={e => onChange(e.target.value)} value={curValue}>
                <option disabled>{defaultValue}</option>
                {['By entry order', 'By personal rating'].map(step => 
                <option key={step}>{step}</option>
                )}
            </select>            
        </div>
    )
}

export default SortSelect
