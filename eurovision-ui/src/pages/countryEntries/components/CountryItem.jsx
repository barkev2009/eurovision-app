import React from 'react'
import EuroFlag from '../../entries/components/EuroFlag'

const CountryItem = ({country, onClick, selectedCountry}) => {
    
    const className = country === selectedCountry ? 'sel-country-item' : 'country-item'

    return (
        <div className={className} onClick={() => onClick(country)}>
            <li>{country}</li>
            <EuroFlag country={country}/>
        </div>
    )
}

export default CountryItem
