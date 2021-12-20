import React from 'react'
import logo from '../../images/logo.png';
import '../common/styles/common.css'


const Banner = () => {
    return (
        <div className='select-container'>
            <img src={logo} alt='euro_logo'/>
            <div className='header'></div>
        </div>
    )
}

export default Banner
