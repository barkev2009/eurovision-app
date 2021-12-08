import React from 'react'
import countryCodes from '../countryCodes';

const EuroFlag = ({country}) => {

    const countryCode = countryCodes.filter(country_obj => country_obj.label === country)[0].value

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
