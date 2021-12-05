import React from 'react'
import './styles/YearSelect.css'

const YearSelect = ({years, onChange, defaultValue}) => {

    return (
        <div className='select'>
            <select onChange={e => onChange(e.target.value)}>
                <option disabled>{defaultValue}</option>
                {years.map(year => 
                <option key={year.year}>{year.year}</option>
                )}
            </select>
        </div>
    )
}

export default YearSelect
