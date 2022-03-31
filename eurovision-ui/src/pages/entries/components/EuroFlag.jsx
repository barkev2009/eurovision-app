import React, { useState } from 'react'
import countryCodes from '../../../mappingFiles/countryCodes';
import Modal from '../../common/Modal';

const EuroFlag = ({country}) => {

    const countryCode = countryCodes.filter(country_obj => country_obj.label === country)[0].value
    const [active, setActive] = useState(false);
    const url = !(countryCode.includes('Flag_of_')) ? 
                `https://raw.githubusercontent.com/lipis/flag-icons/4f420bdd2e954f6da11220f1136fa181ed7019e7/flags/4x3/${countryCode.toLowerCase()}.svg` :      // https://github.com/lipis/flag-icons
                `https://raw.githubusercontent.com/SnpM/us-state-flags-svg/2ede046c91324fd00f643635669f6ff9cb755fcc/flags/${countryCode}.svg`                   // https://github.com/SnpM/us-state-flags-svg

    return (
        <>
        <img 
                src={url} 
                style={{width:'30px', height: 'auto'}}
                alt={countryCode}
                className='flag'
                onClick={() => setActive(true)}
        />
        <Modal active={active} setActive={setActive}>
            <img 
                src={url} 
                alt={countryCode}
                className='modal-image'
                onClick={() => setActive(true)}
            />
        </Modal>
        </>
    )
}

export default EuroFlag
