import React from 'react'
import '../../../styles/style.css'

const SortSelect = ({onChange, curValue, defaultValue, curStep}) => {
    return (
        <div className='select'>
            <select onChange={e => onChange(e.target.value)} value={curValue}>
                <option disabled>{defaultValue}</option>
                {['By entry order', 'By personal rating', 'By place'].map(step => 
                <option key={step} disabled={step === 'By place' && curStep !== 'Grand Final'}>{step}</option>
                )}
            </select>            
        </div>
    )
}

export default SortSelect
