import React from 'react'
import CountryItem from './CountryItem'
import './styles/ScrollCountries.css'

const ScrollCountries = ({countries, onClick, selectedCountry}) => {
    return (
        <div className='countries'>
            <ul>
                {countries.map(country => 
                    <CountryItem country={country.name} onClick={onClick} key={country.name} selectedCountry={selectedCountry}/>
                    )}
            </ul>
        </div>
    )
}

export default ScrollCountries
