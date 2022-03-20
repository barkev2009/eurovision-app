import React from 'react'
import '../../../styles/style.css'

const YearSelect = ({years, onChange, defaultValue, curValue}) => {

    return (
        <div className='select'>
            <select onChange={e => onChange(e.target.value)} value={curValue}>
                <option disabled>{defaultValue}</option>
                {years.map(year => 
                <option key={year}>{year}</option>
                )}
            </select>
        </div>
    )
}

export default YearSelect
