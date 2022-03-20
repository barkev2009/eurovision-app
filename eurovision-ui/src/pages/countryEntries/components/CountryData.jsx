import React from 'react'
import CountryListItem from './CountryListItem'
import '../../../styles/style.css'

const CountryData = ({data}) => {
    return (
        <div className='country-data' key='country-data'>
            {data.map(entry => 
                <CountryListItem entry={entry} key={entry.id}/>
            )}
        </div>
    )
}

export default CountryData
