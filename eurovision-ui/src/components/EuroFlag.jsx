import React from 'react'
import countryList from 'react-select-country-list';

const EuroFlag = ({country}) => {

    const countryCode = countryList().getValue(country)

    return (
        <div className='flag'>
            <img 
                src={`https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.4/Assets/SVG/${countryCode}.svg`} 
                style={{width:'30px', height: 'auto'}}
                alt={countryCode}
            />
        </div>
    )
}

export default EuroFlag
