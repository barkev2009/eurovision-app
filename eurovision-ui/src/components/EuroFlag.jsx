import React from 'react'
import countryCodes from '../countryCodes';

const EuroFlag = ({country}) => {

    const countryCode = countryCodes.filter(country_obj => country_obj.label === country)[0].value
    const url = !(countryCode.includes('Flag_of_')) ? 
                `https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.4/Assets/SVG/${countryCode}.svg` :
                `https://raw.githubusercontent.com/SnpM/us-state-flags-svg/2ede046c91324fd00f643635669f6ff9cb755fcc/flags/${countryCode}.svg`

    return (
        <div className='flag'>
            <img 
                src={url} 
                style={{width:'30px', height: 'auto'}}
                alt={countryCode}
            />
        </div>
    )
}

export default EuroFlag
